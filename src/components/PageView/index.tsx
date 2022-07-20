import React, {useMemo, useRef, useState} from 'react';
import {View, LayoutRectangle, Animated, ViewProps} from 'react-native';
import Context, {ContextValue} from './Context';
import Indicator from './Indicator';
import {createStyles} from '../../services/style';

interface PageViewProps<T> extends ViewProps {
  data?: T[];
  renderItem?(item: T, index: number): any;
}

export function PageView<T>(props: PageViewProps<T>) {
  const offsetA = useMemo(() => new Animated.Value(0), []);
  const ref = useRef<View>(null);
  const [width, setWidth] = useState(0);
  const [footerFrame, setFooterFrame] = useState<LayoutRectangle>();
  const value: ContextValue = useMemo(
    () => ({
      offsetA,
      footerFrame,
      setFooterFrame,
      containerRef: ref,
    }),
    [footerFrame]
  );
  const indexA = useMemo(
    () =>
      offsetA.interpolate({inputRange: [0, width || 320], outputRange: [0, 1]}),
    [width]
  );

  return (
    <Context.Provider value={value}>
      <View
        ref={ref}
        style={[styles.container, props.style]}
        onLayout={e => setWidth(e.nativeEvent.layout.width)}
      >
        <Animated.ScrollView
          bounces={false}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: offsetA}}}],
            {useNativeDriver: true}
          )}
        >
          {width > 0 &&
            props.data?.map((d, i) => (
              <View key={i} style={styles.page(width)}>
                <Item index={i} data={d} renderItem={props.renderItem} />
              </View>
            ))}
        </Animated.ScrollView>
        <Indicator
          indexA={indexA}
          numberOfPages={props.data?.length ?? 0}
          style={{
            position: 'absolute',
            top: footerFrame ? footerFrame.y - 24 : undefined,
            left: footerFrame ? footerFrame?.x % width : 0,
            width: footerFrame?.width ?? '100%',
            bottom: footerFrame ? undefined : 0,
          }}
        />
      </View>
    </Context.Provider>
  );
}

const Item = React.memo(
  (props: any) => props.renderItem?.(props.data, props.index),
  (p, n) => p.data === n.data
);

PageView.Footer = require('./Footer').default;

const styles = createStyles({
  container: {
    flex: 1,
  },
  page: (w: number) => ({
    width: w,
  }),
});
