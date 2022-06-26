import React, {useEffect, useLayoutEffect, useMemo, useState} from 'react';
import {View, Text, ImageBackground, Animated} from 'react-native';
// import * as SplashScreen from 'expo-splash-screen';
import {absoluteFillObject, colors, createStyles} from '../style';
// import {versionString} from '../ota';

interface Props {
  asyncs: ((updateText: (t: string) => void) => Promise<any>)[];
  children: any;
}

export function AppLoading({asyncs, children}: Props) {
  const [done, setDone] = useState(false);
  const [text, setText] = useState('');

  useLayoutEffect(() => {
    // SplashScreen.preventAutoHideAsync()
    //   .then(() => setTimeout(() => SplashScreen.hideAsync(), 200))
    //   .catch(() => {});
    Promise.all(asyncs.map(a => a(setText).catch(() => {}))).finally(() =>
      setDone(true)
    );
  }, []);

  return (
    <View style={styles.container}>
      <Splash text={text} done={done} />
      {done && children}
    </View>
  );
}

function Splash({text, done}: any) {
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

  return (
    <Animated.View style={styles.splash(opacityA)}>
      <ImageBackground
        style={styles.image}
        source={require('../../../assets/splash.png')}
        resizeMode="cover"
      >
        <Text style={styles.text}>
          {/* {versionString} */}
          {'\n'}
          {text}
        </Text>
      </ImageBackground>
    </Animated.View>
  );
}

const styles = createStyles({
  container: {
    flex: 1,
  },
  splash: (opacityA: Animated.Value) => ({
    ...absoluteFillObject,
    zIndex: 100,
    opacity: opacityA,
  }),
  image: {
    flex: 1,
    backgroundColor: colors.white,
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
});
