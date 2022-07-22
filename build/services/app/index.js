import React from 'react';
import m from '../../../modules';
import { loadFonts } from '../style';
import { AppLoading } from './AppLoading';
import { AppModal } from './AppModal';
import { checkForUpdate } from './checkForUpdate';
export function AppProvider(props) {
    const otherAsyncs = props.asyncs ?? [];
    return (<AppLoading SplashView={props.SplashView} asyncs={[checkForUpdate, loadFonts, ...otherAsyncs]}>
      <m.SafeArea.SafeAreaProvider>
        {props.children}
        <AppModal />
      </m.SafeArea.SafeAreaProvider>
    </AppLoading>);
}
export * from './AppModal';
