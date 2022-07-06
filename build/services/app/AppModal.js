import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Modal, StatusBar, Pressable, Keyboard } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, interpolate, withTiming, runOnJS, } from 'react-native-reanimated';
import { absoluteFillObject, colors, createStyles, withOpacity, } from '../../services/style';
let addModals = [];
export function showModal(component, config) {
    Keyboard.dismiss();
    const addModal = addModals[addModals.length - 1];
    addModal && addModal({ ...(config ?? {}), component });
}
export function AppModal() {
    const [state, setState] = useState([]);
    const opacity = useSharedValue(0);
    const props = state.length > 0 ? state[0] : undefined;
    const isCenter = props?.position == 'center';
    const containerStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));
    const contentStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateY: interpolate(opacity.value, isCenter ? [0, 0.8, 1] : [0, 1], isCenter ? [10, 0, 0] : [100, 0]),
            },
        ],
    }));
    useEffect(() => {
        const func = (p) => setState(s => [...s, p]);
        addModals.push(func);
        return () => {
            addModals = addModals.filter(a => a != func);
        };
    }, []);
    useEffect(() => {
        if (props) {
            opacity.value = withTiming(1, { duration: 300 });
        }
    }, [props]);
    const forceDismiss = useCallback(() => {
        function removeStack() {
            setState(s => s.filter((_, i) => i > 0));
        }
        opacity.value = withTiming(0, { duration: 100 }, () => {
            runOnJS(removeStack)();
        });
    }, []);
    const dismiss = useCallback(() => {
        !props?.disableBackHandler && forceDismiss();
    }, [props]);
    const render = useMemo(() => (<Modal transparent visible={!!props} onRequestClose={dismiss}>
        <StatusBar backgroundColor={styles.background.backgroundColor}/>
        <Animated.View style={[styles.container, containerStyle]}>
          <Pressable style={styles.background} onPress={dismiss}/>
          {props && (<Animated.View pointerEvents="box-none" style={[styles.content(isCenter), contentStyle]}>
              {props.component(forceDismiss)}
            </Animated.View>)}
          {props?.canHaveChildModal && <AppModal />}
        </Animated.View>
      </Modal>), [props]);
    return render;
}
const styles = createStyles({
    container: {
        flex: 1,
    },
    background: {
        ...absoluteFillObject,
        backgroundColor: withOpacity(colors.black, 0.5),
    },
    content: (isCenter) => ({
        flex: 1,
        justifyContent: isCenter ? 'center' : 'flex-end',
    }),
});
