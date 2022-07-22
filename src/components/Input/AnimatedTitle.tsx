import React from 'react';
import {TextProps} from 'react-native';
import r, {SharedValue} from '../../../modules/reanimated';

interface AnimatedTitleProps extends TextProps {
  focus?: SharedValue<boolean>;
  forceOnTop?: boolean;
  type?: string;
}

export function AnimatedTitle(props: AnimatedTitleProps) {
  const {focus, forceOnTop, type, style, ...otherProps} = props;

  const titleStyle = r.useAnimatedStyle(() => {
    const onTop = focus?.value || forceOnTop;
    if (type == 'Rounded') {
      return {
        fontSize: r.withTiming(onTop ? 12 : 14, {duration: 200}),
        top: r.withTiming(onTop ? 2 : 14, {duration: 200}),
      };
    } else {
      return {
        fontSize: r.withTiming(onTop ? 12 : 16, {duration: 200}),
        top: r.withTiming(onTop ? 4 : 20, {duration: 200}),
      };
    }
  }, [forceOnTop]);

  return (
    <r.Animated.Text
      style={[style, titleStyle]}
      numberOfLines={1}
      {...otherProps}
    />
  );
}
