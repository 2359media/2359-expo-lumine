import React, { useMemo, useRef, useState } from 'react';
import { View, Animated } from 'react-native';
import Context from './Context';
import Indicator from './Indicator';
import { createStyles } from '../../services/style';
export function PageView(props) {
    const offsetA = useMemo(() => new Animated.Value(0), []);
    const ref = useRef(null);
    const [width, setWidth] = useState(0);
    const [footerFrame, setFooterFrame] = useState();
    const value = useMemo(() => ({
        offsetA,
        footerFrame,
        setFooterFrame,
        containerRef: ref,
    }), [footerFrame]);
    const indexA = useMemo(() => offsetA.interpolate({ inputRange: [0, width || 320], outputRange: [0, 1] }), [width]);
    return (<Context.Provider value={value}>
      <View ref={ref} style={[styles.container, props.style]} onLayout={e => setWidth(e.nativeEvent.layout.width)}>
        <Animated.ScrollView bounces={false} horizontal pagingEnabled showsHorizontalScrollIndicator={false} onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: offsetA } } }], { useNativeDriver: true })}>
          {width > 0 &&
            props.data?.map((d, i) => (<View key={i} style={styles.page(width)}>
                <Item index={i} data={d} renderItem={props.renderItem}/>
              </View>))}
        </Animated.ScrollView>
        <Indicator indexA={indexA} numberOfPages={props.data?.length ?? 0} style={{
            position: 'absolute',
            top: footerFrame ? footerFrame.y - 24 : undefined,
            left: footerFrame ? footerFrame?.x % width : 0,
            width: footerFrame?.width ?? '100%',
            bottom: footerFrame ? undefined : 0,
        }}/>
      </View>
    </Context.Provider>);
}
const Item = React.memo((props) => props.renderItem?.(props.data, props.index), (p, n) => p.data === n.data);
PageView.Footer = require('./Footer').default;
const styles = createStyles({
    container: {
        flex: 1,
    },
    page: (w) => ({
        width: w,
    }),
});
