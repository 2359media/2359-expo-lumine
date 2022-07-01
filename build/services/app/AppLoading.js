import React, { useLayoutEffect, useState } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AppSplash from './AppSplash';
import { createStyles } from '../style';
export function AppLoading({ asyncs, children }) {
    const [done, setDone] = useState(false);
    const [text, setText] = useState('');
    useLayoutEffect(() => {
        SplashScreen.preventAutoHideAsync()
            .then(() => setTimeout(() => SplashScreen.hideAsync(), 200))
            .catch(() => { });
        Promise.all(asyncs.map(a => a(setText).catch(() => { }))).finally(() => setDone(true));
    }, []);
    return (React.createElement(View, { style: styles.container },
        React.createElement(AppSplash, { text: text, done: done }),
        done && children));
}
const styles = createStyles({
    container: {
        flex: 1,
    },
});
