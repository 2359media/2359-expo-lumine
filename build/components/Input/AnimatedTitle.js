import React from 'react';
import Animated, { useAnimatedStyle, withTiming, } from 'react-native-reanimated';
export function AnimatedTitle(props) {
    const { focus, forceOnTop, type, style, ...otherProps } = props;
    const titleStyle = useAnimatedStyle(() => {
        const onTop = focus?.value || forceOnTop;
        if (type == 'Rounded') {
            return {
                fontSize: withTiming(onTop ? 12 : 14, { duration: 200 }),
                top: withTiming(onTop ? 2 : 14, { duration: 200 }),
            };
        }
        else {
            return {
                fontSize: withTiming(onTop ? 12 : 16, { duration: 200 }),
                top: withTiming(onTop ? 4 : 20, { duration: 200 }),
            };
        }
    }, [forceOnTop]);
    return (<Animated.Text style={[style, titleStyle]} numberOfLines={1} {...otherProps}/>);
}
