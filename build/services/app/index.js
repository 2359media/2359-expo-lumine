import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { loadFonts } from '../style';
import { AppLoading } from './AppLoading';
import { checkForUpdate } from './checkForUpdate';
export function AppProvider(props) {
    return (React.createElement(AppLoading, { asyncs: [checkForUpdate, loadFonts, ...(props.asyncs ?? [])] },
        React.createElement(SafeAreaProvider, { style: { flex: 1 } }, props.children)));
}
//# sourceMappingURL=index.js.map