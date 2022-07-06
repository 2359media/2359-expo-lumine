import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { loadFonts } from '../style';
import { AppLoading } from './AppLoading';
import { AppModal } from './AppModal';
import { checkForUpdate } from './checkForUpdate';
export function AppProvider(props) {
    const otherAsyncs = props.asyncs ?? [];
    return (<AppLoading asyncs={[checkForUpdate, loadFonts, ...otherAsyncs]}>
      <SafeAreaProvider style={{ flex: 1 }}>
        {props.children}
        <AppModal />
      </SafeAreaProvider>
    </AppLoading>);
}
export * from './AppModal';
