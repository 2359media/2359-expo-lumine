import React, { useMemo, useRef, useState } from 'react';
import { View, Animated } from 'react-native';
import Context from './Context';
import Indicator from './Indicator';
import { createStyles } from '../../services/style';
export function PageView(props) {
    const offsetA = useMemo(() => new Animated.Value(0), []);
    const ref = useRef(null);
    const [width, setWidth] = useState(0);
    const [indicatorFrame, setIndicatorFrame] = useState();
    const value = useMemo(() => ({
        offsetA,
        indicatorFrame,
        setIndicatorFrame,
        containerRef: ref,
    }), [indicatorFrame]);
    const indexA = useMemo(() => offsetA.interpolate({ inputRange: [0, width || 320], outputRange: [0, 1] }), [width]);
    const cs = Array.isArray(props.children) ? props.children : [props.children];
    return (<Context.Provider value={value}>
      <View ref={ref} style={[styles.container, props.style]} onLayout={e => setWidth(e.nativeEvent.layout.width)}>
        <Animated.ScrollView bounces={false} horizontal pagingEnabled showsHorizontalScrollIndicator={false} onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: offsetA } } }], { useNativeDriver: true })}>
          {width > 0 &&
            cs.map((c, i) => (<View key={i} style={styles.page(width)}>
                {c}
              </View>))}
        </Animated.ScrollView>
        <Indicator indexA={indexA} numberOfPages={cs.length} style={{
            position: 'absolute',
            top: indicatorFrame?.y,
            left: 0,
            right: 0,
        }}/>
      </View>
    </Context.Provider>);
}
PageView.IndicatorFrame = require('./IndicatorFrame').default;
export const styles = createStyles({
    container: {
        flex: 1,
    },
    page: (w) => ({
        width: w,
    }),
});
