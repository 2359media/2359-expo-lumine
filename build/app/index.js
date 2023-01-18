import React from 'react';
import m from '../modules';
import { loadStores } from '../store';
import { loadFonts } from '../style';
import { AppLoading } from './AppLoading';
import { ModalContainer } from '../modal';
import { checkForUpdate } from './checkForUpdate';
export function AppProvider(props) {
    const otherAsyncs = props.asyncs ?? [];
    return (<AppLoading SplashView={props.SplashView} asyncs={[checkForUpdate, loadFonts, loadStores, ...otherAsyncs]}>
      <m.SafeArea.SafeAreaProvider>
        {props.children}
        <ModalContainer />
      </m.SafeArea.SafeAreaProvider>
    </AppLoading>);
}
export * from './AppState';
