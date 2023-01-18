import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Modal as RM, Pressable, Keyboard, View } from 'react-native';
import { absoluteFillObject, createThemeStyles, withOpacity } from '../style';
let addModal;
export function showModal(component, config) {
    addModal?.({ ...(config ?? {}), component });
}
export function ModalContainer() {
    const modalsRef = useRef([]);
    const idRef = useRef(1);
    const [currentId, setCurrentId] = useState(0);
    const timeoutRef = useRef();
    useEffect(() => {
        addModal = (p) => {
            Keyboard.dismiss();
            const id = idRef.current;
            idRef.current++;
            p.id = id;
            p.onDismiss = function () {
                modalsRef.current = modalsRef.current.filter(m => m.id !== id);
                calculateCurrentId();
            };
            modalsRef.current.push(p);
            calculateCurrentId();
        };
    }, []);
    function calculateCurrentId() {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setCurrentId(id => {
                const newId = modalsRef.current[modalsRef.current.length - 1]?.id ?? 0;
                if (id == newId) {
                    return id;
                }
                if (id == 0) {
                    return newId;
                }
                calculateCurrentId();
                return 0;
            });
        }, 100);
    }
    return (<>
      {modalsRef.current.map(m => (<Modal key={m.id} {...m} visible={m.id == currentId}/>))}
    </>);
}
function Modal(props) {
    const isCenter = props?.position == 'center';
    const styles = useThemeStyles();
    const dismiss = useCallback(() => {
        !props?.disableBackHandler && props.onDismiss?.();
    }, []);
    return (<RM transparent visible={props.visible} animationType={props.position == 'center' ? 'fade' : 'slide'} onRequestClose={dismiss}>
      <View style={styles.container}>
        <Pressable style={styles.background} onPress={dismiss}/>
        <View pointerEvents="box-none" style={styles.content(isCenter)}>
          {props.component(props.onDismiss)}
        </View>
      </View>
    </RM>);
}
const useThemeStyles = createThemeStyles(({ colors }) => ({
    container: {
        flex: 1,
    },
    background: {
        ...absoluteFillObject,
        top: -5000,
        backgroundColor: withOpacity(colors.black, 0.5),
    },
    content: (isCenter) => ({
        flex: 1,
        justifyContent: isCenter ? 'center' : 'flex-end',
    }),
}));
