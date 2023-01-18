import React, { useEffect, useMemo, useState } from 'react';
import { Animated } from 'react-native';
import { absoluteFillObject, createStyles } from '../style';
export default function AppSplash({ children, done }) {
    const opacityA = useMemo(() => new Animated.Value(1), []);
    const [hidden, setHidden] = useState(false);
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
    return (<Animated.View style={styles.splash(opacityA)}>{children}</Animated.View>);
}
const styles = createStyles({
    splash: (opacityA) => ({
        ...absoluteFillObject,
        zIndex: 100,
        opacity: opacityA,
    }),
});
