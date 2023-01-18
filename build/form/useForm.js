import { useEffect, useMemo, useRef, useState } from 'react';
import { Keyboard } from 'react-native';
export function useForm(config) {
    const [_, setDate] = useState(new Date());
    const configRef = useRef(config);
    configRef.current = config;
    const timeoutRef = useRef();
    useEffect(() => {
        return () => {
            timeoutRef.current && clearTimeout(timeoutRef.current);
        };
    }, []);
    return useMemo(() => {
        const form = { hasUnsavedChanges: false };
        let maps = [];
        function getValues(c, f, co) {
            const values = {};
            Object.keys(c).forEach(k => {
                if (Array.isArray(c[k].input)) {
                    values[k] = f[k].inputs.map(f2 => {
                        return getValues(c[k].input[0], f2, co);
                    });
                }
                else if (typeof c[k].input == 'object') {
                    values[k] = getValues(c[k].input, f[k], co);
                }
                else if (!co || f[k].value != c[k].initialValue) {
                    values[k] = f[k].value;
                }
            });
            return values;
        }
        function reloadMaps() {
            maps = [];
            function fillInputs(c, f) {
                Object.keys(c).forEach(k => {
                    if (Array.isArray(c[k].input)) {
                        f[k].inputs.forEach(f2 => {
                            fillInputs(c[k].input[0], f2);
                        });
                    }
                    else if (typeof c[k].input == 'object') {
                        fillInputs(c[k].input, f[k]);
                    }
                    else {
                        maps.push({ config: c[k], input: f[k] });
                    }
                });
            }
            fillInputs(config.input, form.input);
        }
        function nextFrom(input) {
            const i = maps.findIndex(m => m.input == input);
            if (i == maps.length - 1) {
                form.submit();
            }
            else {
                const next = maps.find((m, j) => j > i && m.config.editable !== false);
                if (next?.input?.inputRef?._current?.focus) {
                    next.input.inputRef._current.focus();
                }
                else {
                    Keyboard.dismiss();
                }
            }
        }
        function validateValues() {
            form.submitDisabled = maps.some(m => (!m.config.optional && !m.input.value) ||
                m.config.validator?.(m.input.value, form.input));
            function showError() {
                maps.forEach((m, i) => {
                    m.input.hasNextInput = i < maps.length - 1;
                    m.input.error = m.input.edited
                        ? m.config.validator?.(m.input.value, form.input)
                        : undefined;
                });
                setDate(new Date());
            }
            timeoutRef.current && clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(showError, 500);
        }
        function getInput(c, d) {
            const objInputs = {};
            Object.keys(c).forEach(k => {
                if (Array.isArray(c[k].input)) {
                    const values = d?.[k] ?? c[k].initialValue ?? [];
                    const subC = c[k].input[0];
                    const inputs = values.map((_, i) => getInput(subC, d?.[k]?.[i] ?? _));
                    objInputs[k] = {
                        inputs,
                        add() {
                            inputs.push(getInput(subC, undefined));
                            reloadMaps();
                            validateValues();
                            setDate(new Date());
                        },
                        remove(index) {
                            inputs.splice(index, 1);
                            reloadMaps();
                            validateValues();
                            setDate(new Date());
                        },
                    };
                }
                else if (typeof c[k].input == 'object') {
                    objInputs[k] = getInput(c[k].input, d?.[k]);
                }
                else {
                    const input = {
                        value: d?.[k] ?? c[k].initialValue,
                        editable: c[k].editable ?? true,
                        optional: c[k].optional ?? false,
                        edited: false,
                    };
                    if (d?.[k] && d[k] !== c[k].initialValue) {
                        form.hasUnsavedChanges = true;
                    }
                    input.inputRef = (r) => {
                        input.inputRef._current = r;
                    };
                    input.onValueChange = (value) => {
                        form.hasUnsavedChanges = true;
                        input.value = value;
                        input.edited = true;
                        input.error = undefined;
                        validateValues();
                        setDate(new Date());
                    };
                    input.onNext = () => nextFrom(input);
                    objInputs[k] = input;
                }
            });
            return objInputs;
        }
        form.submit = () => {
            Keyboard.dismiss();
            const { submit } = configRef.current;
            !form.submitDisabled && submit && submit(form.getValues());
        };
        form.getValues = (changesOnly = configRef.current.submitChangesOnly) => {
            return getValues(config.input, form.input, changesOnly);
        };
        form.setValues = (values) => {
            form.hasUnsavedChanges = true;
            Object.keys(values).forEach(k => {
                form.input[k].value = values[k];
            });
            validateValues();
            setDate(new Date());
        };
        // form.saveDraft = () => {
        //   const {draftId} = configRef.current;
        //   draftId && updateState({drafts: {[draftId]: form.getValues(true)}});
        // };
        // form.deleteDraft = () => {
        //   const {draftId} = configRef.current;
        //   draftId && updateState({drafts: {[draftId]: undefined}});
        // };
        // const draft = config.draftId && getState().drafts[config.draftId];
        form.input = getInput(config.input, false /*draft*/);
        reloadMaps();
        validateValues();
        return form;
    }, []);
}
