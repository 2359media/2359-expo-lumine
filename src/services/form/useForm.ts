import {useEffect, useMemo, useRef, useState} from 'react';
import {Keyboard} from 'react-native';

type Config = {
  initialValue?: any;
  editable?: boolean;
  optional?: boolean;
  validator?(value: any, otherInput: any): string | undefined;
};

type SubConfig = {
  [key: string]: {input?: SubConfig | [SubConfig]} & Config;
};

type RootConfig = {
  input: SubConfig;
  draftId?: string;
  submitChangesOnly?: boolean;
  submit?(values: any): void;
};

type Input<T = any> = {
  value?: T;
  onValueChange(value?: T): void;
  hasNextInput?: boolean;
  onNext?(): void;
  error?: string;
  optional?: boolean;
  editable?: boolean;
  edited?: boolean;
  inputRef?(r: any): {focus?(): void};
};

type SubForm<T extends SubConfig> = {
  [K in keyof T]: T[K]['input'] extends SubConfig
    ? SubForm<T[K]['input']>
    : T[K]['input'] extends SubConfig[]
    ? {
        add(): void;
        remove(index: number): void;
        inputs: SubForm<T[K]['input'][0]>[];
      }
    : Input<T[K]['initialValue'] | any>;
};

export type Form<T extends RootConfig> = {
  input: SubForm<T['input']>;
  submitDisabled: boolean;
  submit(): void;
  getValues(changesOnly?: boolean): any;
  hasUnsavedChanges: boolean;
  setValues(values: any): void;
  saveDraft(): void;
  deleteDraft(): void;
};

export function useForm<T extends RootConfig>(config: T): Form<T> {
  const [_, setDate] = useState(new Date());
  const configRef = useRef(config);
  configRef.current = config;

  const timeoutRef = useRef<any>();

  useEffect(() => {
    return () => {
      timeoutRef.current && clearTimeout(timeoutRef.current);
    };
  }, []);

  return useMemo(() => {
    const form: Form<T> = {hasUnsavedChanges: false} as Form<T>;
    let maps: {
      config: Config;
      input: Input<any>;
    }[] = [];

    function getValues<T extends SubConfig>(
      c: T,
      f: SubForm<T>,
      co?: boolean
    ): any {
      const values: any = {};
      Object.keys(c).forEach(k => {
        if (Array.isArray(c[k].input)) {
          values[k] = ((f[k] as any).inputs as SubForm<any>[]).map(f2 => {
            return getValues((c[k].input as [SubConfig])[0], f2, co);
          });
        } else if (typeof c[k].input == 'object') {
          values[k] = getValues(
            c[k].input as SubConfig,
            f[k] as SubForm<any>,
            co
          );
        } else if (!co || (f[k] as Input<any>).value != c[k].initialValue) {
          values[k] = (f[k] as Input<any>).value;
        }
      });
      return values;
    }

    function reloadMaps() {
      maps = [];
      function fillInputs<T extends SubConfig>(c: T, f: SubForm<T>) {
        Object.keys(c).forEach(k => {
          if (Array.isArray(c[k].input)) {
            ((f[k] as any).inputs as SubForm<any>[]).forEach(f2 => {
              fillInputs((c[k].input as SubConfig[])[0], f2);
            });
          } else if (typeof c[k].input == 'object') {
            fillInputs(c[k].input as SubConfig, f[k] as SubForm<any>);
          } else {
            maps.push({config: c[k], input: f[k] as Input<any>});
          }
        });
      }
      fillInputs(config.input, form.input);
    }

    function nextFrom(input: Input<any>) {
      const i = maps.findIndex(m => m.input == input);
      if (i == maps.length - 1) {
        form.submit();
      } else {
        const next = maps.find((m, j) => j > i && m.config.editable !== false);
        if ((next?.input as any)?.inputRef?._current?.focus) {
          (next!.input as any).inputRef._current.focus();
        } else {
          Keyboard.dismiss();
        }
      }
    }

    function validateValues() {
      form.submitDisabled = maps.some(
        m =>
          (!m.config.optional && !m.input.value) ||
          m.config.validator?.(m.input.value, form.input)
      );

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

    function getInput<T extends SubConfig>(c: T, d: any): any {
      const objInputs: any = {};
      Object.keys(c).forEach(k => {
        if (Array.isArray(c[k].input)) {
          const values: any[] = d?.[k] ?? c[k].initialValue ?? [];
          const subC = (c[k].input as [SubConfig])[0];
          const inputs = values.map((_, i) => getInput(subC, d?.[k]?.[i] ?? _));
          objInputs[k] = {
            inputs,
            add() {
              inputs.push(getInput(subC, undefined));
              reloadMaps();
              validateValues();
              setDate(new Date());
            },
            remove(index: number) {
              inputs.splice(index, 1);
              reloadMaps();
              validateValues();
              setDate(new Date());
            },
          };
        } else if (typeof c[k].input == 'object') {
          objInputs[k] = getInput(c[k].input as SubConfig, d?.[k]);
        } else {
          const input: any = {
            value: d?.[k] ?? c[k].initialValue,
            editable: c[k].editable ?? true,
            optional: c[k].optional ?? false,
            edited: false,
          };
          if (d?.[k] && d[k] !== c[k].initialValue) {
            form.hasUnsavedChanges = true;
          }
          input.inputRef = (r: any) => {
            input.inputRef._current = r;
          };
          input.onValueChange = (value: any) => {
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
      const {submit} = configRef.current;
      !form.submitDisabled && submit && submit(form.getValues());
    };

    form.getValues = (changesOnly = configRef.current.submitChangesOnly) => {
      return getValues(config.input, form.input, changesOnly);
    };

    form.setValues = (values: any) => {
      form.hasUnsavedChanges = true;
      Object.keys(values).forEach(k => {
        (form.input[k] as any).value = values![k];
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

export type InputProps<T> = Input<T>;
