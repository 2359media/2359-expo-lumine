import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {Modal, StatusBar, Pressable, Keyboard} from 'react-native';
import r from '../../../modules/reanimated';
import {
  absoluteFillObject,
  createThemeStyles,
  withOpacity,
} from '../../services/style';

interface ModalConfig {
  position?: 'bottom' | 'center';
  disableBackHandler?: boolean;
  canHaveChildModal?: boolean;
}

interface ModalProps extends ModalConfig {
  component(dismiss: () => void): any;
}

let addModals: ((p: ModalProps) => void)[] = [];

export function showModal(
  component: (dismiss: () => void) => any,
  config?: ModalConfig
) {
  Keyboard.dismiss();
  const addModal = addModals[addModals.length - 1];
  addModal && addModal({...(config ?? {}), component});
}

export function AppModal() {
  const [state, setState] = useState<ModalProps[]>([]);
  const opacity = r.useSharedValue(0);
  const props: ModalProps | undefined = state.length > 0 ? state[0] : undefined;
  const isCenter = props?.position == 'center';
  const styles = useThemeStyles();

  const containerStyle = r.useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const contentStyle = r.useAnimatedStyle(() => ({
    transform: [
      {
        translateY: r.interpolate(
          opacity.value,
          isCenter ? [0, 0.8, 1] : [0, 1],
          isCenter ? [10, 0, 0] : [100, 0]
        ),
      },
    ],
  }));

  useEffect(() => {
    const func = (p: ModalProps) => setState(s => [...s, p]);
    addModals.push(func);
    return () => {
      addModals = addModals.filter(a => a != func);
    };
  }, []);

  useEffect(() => {
    if (props) {
      opacity.value = r.withTiming(1, {duration: 300});
    }
  }, [props]);

  const forceDismiss = useCallback(() => {
    function removeStack() {
      setState(s => s.filter((_, i) => i > 0));
    }
    opacity.value = r.withTiming(0, {duration: 100}, () => {
      r.runOnJS(removeStack)();
    });
  }, []);

  const dismiss = useCallback(() => {
    !props?.disableBackHandler && forceDismiss();
  }, [props]);

  const render = useMemo(
    () => (
      <Modal transparent visible={!!props} onRequestClose={dismiss}>
        <StatusBar backgroundColor={styles.background.backgroundColor} />
        <r.Animated.View style={[styles.container, containerStyle]}>
          <Pressable style={styles.background} onPress={dismiss} />
          {props && (
            <r.Animated.View
              pointerEvents="box-none"
              style={[styles.content(isCenter), contentStyle]}
            >
              {props.component(forceDismiss)}
            </r.Animated.View>
          )}
          {props?.canHaveChildModal && <AppModal />}
        </r.Animated.View>
      </Modal>
    ),
    [props]
  );
  return render;
}

const useThemeStyles = createThemeStyles(({colors}) => ({
  container: {
    flex: 1,
  },
  background: {
    ...absoluteFillObject,
    backgroundColor: withOpacity(colors.foreground, 0.2),
  },
  content: (isCenter: boolean) => ({
    flex: 1,
    justifyContent: isCenter ? 'center' : 'flex-end',
  }),
}));
