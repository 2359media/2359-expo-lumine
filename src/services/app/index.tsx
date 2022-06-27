import React from 'react';
import {ViewProps} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {loadFonts} from '../style';
import {AppLoading} from './AppLoading';
import {checkForUpdate} from './checkForUpdate';

interface Props extends ViewProps {
  asyncs?: ((updateText: (t: string) => void) => Promise<any>)[];
}

export function AppProvider(props: Props) {
  return (
    <AppLoading asyncs={[checkForUpdate, loadFonts, ...(props.asyncs ?? [])]}>
      <SafeAreaProvider style={{flex: 1}}>{props.children}</SafeAreaProvider>
    </AppLoading>
  );
}
