import React from 'react';
import {ViewProps} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {loadFonts} from '../style';
import {AppLoading} from './AppLoading';
import {AppModal} from './AppModal';
import {checkForUpdate} from './checkForUpdate';

interface Props extends ViewProps {
  asyncs?: ((updateText: (t: string) => void) => Promise<any>)[];
  SplashView?: (props: {text?: string}) => any;
}

export function AppProvider(props: Props) {
  const otherAsyncs = props.asyncs ?? [];
  return (
    <AppLoading
      SplashView={props.SplashView}
      asyncs={[checkForUpdate, loadFonts, ...otherAsyncs]}
    >
      <SafeAreaProvider style={{flex: 1}}>
        {props.children}
        <AppModal />
      </SafeAreaProvider>
    </AppLoading>
  );
}

export * from './AppModal';
