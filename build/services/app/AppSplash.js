import React, { useEffect, useMemo, useState } from 'react';
import { Text, ImageBackground, Animated } from 'react-native';
import { absoluteFillObject, createThemeStyles } from '../style';
import { versionString } from './version';
export default function AppSplash({ text, done }) {
    const opacityA = useMemo(() => new Animated.Value(1), []);
    const [hidden, setHidden] = useState(false);
    const styles = useThemeStyles();
    useEffect(() => {
        if (done) {
            Animated.timing(opacityA, {
                toValue: 0,
                delay: 200,
                duration: 200,
                useNativeDriver: true,
            }).start(() => {
                setHidden(true);
            });
        }
    }, [done]);
    if (hidden) {
        return null;
    }
    return (React.createElement(Animated.View, { style: styles.splash(opacityA) },
        React.createElement(ImageBackground, { style: styles.image, source: require('../../../assets/splash.png'), resizeMode: "cover" },
            React.createElement(Text, { style: styles.text },
                versionString,
                '\n',
                text))));
}
const useThemeStyles = createThemeStyles(({ colors }) => ({
    container: {
        flex: 1,
    },
    splash: (opacityA) => ({
        ...absoluteFillObject,
        zIndex: 100,
        opacity: opacityA,
    }),
    image: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    text: {
        textAlign: 'center',
        alignSelf: 'stretch',
        marginBottom: 50,
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        opacity: 0.8,
    },
}));
//# sourceMappingURL=AppSplash.js.map