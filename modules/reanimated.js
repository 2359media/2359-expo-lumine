const {useMemo} = require('react');
const {Text, View} = require('react-native');

const modules = {};

try {
  const {default: Animated, ...rest} = require('react-native-reanimated');
  modules.Animated = Animated;
  Object.assign(modules, rest);
} catch {
  Object.assign(modules, {
    Animated: {
      Text,
      View,
      createAnimatedComponent: c => c,
    },
    useSharedValue: value => useMemo(() => ({value}), []),
    useAnimatedStyle: value => useMemo(value, []),
    withTiming: value => value,
    interpolate: (x, i, o) => o[0],
    runOnJS:
      fn =>
      (...args) =>
        setTimeout(() => fn(...args), 0),
    useAnimatedScrollHandler: () => undefined,
  });
}

export default modules;
