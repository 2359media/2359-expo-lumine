import {useEffect, useRef} from 'react';
import {AppState} from 'react-native';

export function useAppActiveAction(fn: () => void) {
  const fnRef = useRef(fn);
  fnRef.current = fn;
  useEffect(() => {
    let current = AppState.currentState;
    const subscription = AppState.addEventListener('change', next => {
      if (current.match(/inactive|background/) && next === 'active') {
        fnRef.current();
      }
      current = next;
    });
    return () => {
      subscription.remove();
    };
  }, []);
}
