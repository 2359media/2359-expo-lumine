import React, { useEffect, useMemo, useState } from 'react';
import { Text, ImageBackground, Animated, View } from 'react-native';
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
    return (<Animated.View style={styles.splash(opacityA)}>
      <ImageBackground style={styles.image} source={require('../../bridge').splashImage} resizeMode="cover">
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {versionString}
            {'\n'}
            {text}
          </Text>
        </View>
      </ImageBackground>
    </Animated.View>);
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
    textContainer: {
        backgroundColor: 'black',
        padding: 8,
        borderRadius: 8,
        alignSelf: 'center',
        marginBottom: 50,
        // opacity: 0.5,
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
}));
