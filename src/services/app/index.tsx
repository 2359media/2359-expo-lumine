import React from 'react';
import {ViewProps} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {loadStore} from '../store';
import {loadFonts} from '../style';
import {AppLoading} from './AppLoading';
import {checkForUpdate} from './checkForUpdate';

interface Props extends ViewProps {
  asyncs?: ((updateText: (t: string) => void) => Promise<any>)[];
}

export function AppProvider(props: Props) {
  const otherAsyncs = props.asyncs ?? [];
  return (
    <AppLoading asyncs={[checkForUpdate, loadStore, loadFonts, ...otherAsyncs]}>
      <SafeAreaProvider style={{flex: 1}}>{props.children}</SafeAreaProvider>
    </AppLoading>
  );
}
