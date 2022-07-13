import React from 'react';
import {Animated, View, ViewProps} from 'react-native';
import {createStyles, colors} from '../../services/style';

interface IndicatorProps extends ViewProps {
  indexA: Animated.AnimatedInterpolation;
  numberOfPages: number;
}

export default function Indicator(props: IndicatorProps) {
  const {indexA, numberOfPages, style} = props;

  return (
    <View style={[styles.container, style]} pointerEvents="none">
      {[...Array(numberOfPages)].map((_, i) => (
        <View style={styles.indicator} key={i}>
          <Animated.View style={styles.indicatorContent(indexA, i)} />
        </View>
      ))}
    </View>
  );
}

const styles = createStyles({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 24,
  },
  indicator: {
    width: 8,
    height: 8,
    backgroundColor: colors.greyL3,
    overflow: 'hidden',
    borderRadius: 4,
    margin: 3,
  },
  indicatorContent: (a: Animated.AnimatedInterpolation, i: number) => ({
    flex: 1,
    backgroundColor: colors.greyD1,
    opacity: a.interpolate({
      inputRange: [-2, -1, 0, 1, 2].map(x => i + x),
      outputRange: [0, 0, 1, 0, 0],
    }) as any,
  }),
});
