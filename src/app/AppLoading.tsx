import React, {useLayoutEffect, useState} from 'react';
import {View} from 'react-native';
import m from '../modules';
import AppSplash from './AppSplash';
import {createStyles} from '../style';
import {getVersionString} from './version';

interface Props {
  asyncs: ((updateText: (t: string) => void) => Promise<any>)[];
  SplashView?: any;
  children: any;
}

export function AppLoading({asyncs, children, SplashView}: Props) {
  const [done, setDone] = useState(false);
  const [text, setText] = useState('');

  useLayoutEffect(() => {
    m.SplashScreen.preventAutoHideAsync()
      .then(() => setTimeout(() => m.SplashScreen.hideAsync(), 200))
      .catch(() => {});
    Promise.all(asyncs.map(a => a(setText).catch(() => {}))).finally(() =>
      setDone(true)
    );
  }, []);

  return (
    <View style={styles.container}>
      <AppSplash done={done}>
        {SplashView && <SplashView text={`${getVersionString()}\n${text}`} />}
      </AppSplash>
      {done && children}
    </View>
  );
}

const styles = createStyles({
  container: {
    flex: 1,
  },
});
