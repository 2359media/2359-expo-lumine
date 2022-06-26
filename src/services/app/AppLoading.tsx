import React, {useLayoutEffect, useState} from 'react';
import {View} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AppSplash from './AppSplash';
import {createStyles} from '../style';

interface Props {
  asyncs: ((updateText: (t: string) => void) => Promise<any>)[];
  children: any;
}

export function AppLoading({asyncs, children}: Props) {
  const [done, setDone] = useState(false);
  const [text, setText] = useState('');

  useLayoutEffect(() => {
    SplashScreen.preventAutoHideAsync()
      .then(() => setTimeout(() => SplashScreen.hideAsync(), 200))
      .catch(() => {});
    Promise.all(asyncs.map(a => a(setText).catch(() => {}))).finally(() =>
      setDone(true)
    );
  }, []);

  return (
    <View style={styles.container}>
      <AppSplash text={text} done={done} />
      {done && children}
    </View>
  );
}

const styles = createStyles({
  container: {
    flex: 1,
  },
});
