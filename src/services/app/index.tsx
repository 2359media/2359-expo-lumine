import React from 'react';
import {ViewProps} from 'react-native';
import m from '../../../modules';
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
      <m.SafeArea.SafeAreaProvider>
        {props.children}
        <AppModal />
      </m.SafeArea.SafeAreaProvider>
    </AppLoading>
  );
}

export * from './AppModal';
