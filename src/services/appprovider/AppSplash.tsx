import React, {useEffect, useMemo, useState} from 'react';
import {Text, ImageBackground, Animated} from 'react-native';
import {absoluteFillObject, colors, createStyles} from '../style';

export default function AppSplash({text, done}: any) {
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

const styles = createStyles(() => ({
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
}));
