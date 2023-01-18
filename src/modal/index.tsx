import React, {useState, useEffect, useCallback, useRef} from 'react';
import {Modal as RM, Pressable, Keyboard, View} from 'react-native';
import {absoluteFillObject, createThemeStyles, withOpacity} from '../style';

interface ModalConfig {
  position?: 'bottom' | 'center';
  disableBackHandler?: boolean;
}

interface ModalProps extends ModalConfig {
  component(dismiss: () => void): any;
  onDismiss?(): void;
  id?: number;
  visible?: boolean;
}

let addModal: (p: ModalProps) => void;

export function showModal(
  component: (dismiss: () => void) => any,
  config?: ModalConfig
) {
  addModal?.({...(config ?? {}), component});
}

export function ModalContainer() {
  const modalsRef = useRef<ModalProps[]>([]);
  const idRef = useRef<number>(1);
  const [currentId, setCurrentId] = useState(0);
  const timeoutRef = useRef<any>();

  useEffect(() => {
    addModal = (p: ModalProps) => {
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

  return (
    <>
      {modalsRef.current.map(m => (
        <Modal key={m.id} {...m} visible={m.id == currentId} />
      ))}
    </>
  );
}

function Modal(props: ModalProps) {
  const isCenter = props?.position == 'center';
  const styles = useThemeStyles();

  const dismiss = useCallback(() => {
    !props?.disableBackHandler && props.onDismiss?.();
  }, []);

  return (
    <RM
      transparent
      visible={props.visible}
      animationType={props.position == 'center' ? 'fade' : 'slide'}
      onRequestClose={dismiss}
    >
      <View style={styles.container}>
        <Pressable style={styles.background} onPress={dismiss} />
        <View pointerEvents="box-none" style={styles.content(isCenter)}>
          {props.component(props.onDismiss!)}
        </View>
      </View>
    </RM>
  );
}

const useThemeStyles = createThemeStyles(({colors}) => ({
  container: {
    flex: 1,
  },
  background: {
    ...absoluteFillObject,
    top: -5000,
    backgroundColor: withOpacity(colors.black, 0.5),
  },
  content: (isCenter: boolean) => ({
    flex: 1,
    justifyContent: isCenter ? 'center' : 'flex-end',
  }),
}));
