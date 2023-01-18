import React from 'react';
import {ViewProps} from 'react-native';
import m from '../modules';
import {loadStores} from '../store';
import {loadFonts} from '../style';
import {AppLoading} from './AppLoading';
import {ModalContainer} from '../modal';
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
      asyncs={[checkForUpdate, loadFonts, loadStores, ...otherAsyncs]}
    >
      <m.SafeArea.SafeAreaProvider>
        {props.children}
        <ModalContainer />
      </m.SafeArea.SafeAreaProvider>
    </AppLoading>
  );
}

export * from './AppState';
