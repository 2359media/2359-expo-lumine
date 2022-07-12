import React, { forwardRef } from 'react';
import { useRef } from 'react';
import { View, Pressable, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Animated, { interpolate, runOnJS, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, } from 'react-native-reanimated';
import { useSafeStyles } from './shared';
const AnimatedKASV = Animated.createAnimatedComponent(KeyboardAwareScrollView);
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
export const SFAScrollView = forwardRef((props, ref) => {
    const { style, topHero, topView, topStickyView, listHeaderView, placeholder, hasTabBar, bottomView, children, onScroll, keyboardAware, refreshControl, ...rest } = props;
    const Comp = keyboardAware ? AnimatedKASV : Animated.ScrollView;
    const styles = useSafeStyles(hasTabBar || !!bottomView);
    const scrollRef = useRef();
    const offset = useSharedValue(0);
    const h = useSharedValue(100);
    const pulldownStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateY: interpolate(offset.value, [-1, 0, 1, 2].map(x => h.value + x), [-60, -60, 0, 0]),
            },
        ],
        opacity: interpolate(offset.value, [-1, 0, 50, 51].map(x => h.value + x), [0, 0, 1, 1]),
    }));
    const topNavStyle = useAnimatedStyle(() => ({
        zIndex: 100,
        transform: [{ translateY: Math.min(offset.value, 0) }],
    }));
    const progressStyle = useAnimatedStyle(() => ({
        marginTop: h.value + styles.top.paddingTop,
        marginBottom: -(h.value + styles.top.paddingTop),
    }));
    const scrollHandler = useAnimatedScrollHandler(e => {
        offset.value = e.contentOffset.y;
        onScroll && runOnJS(onScroll)({ nativeEvent: e });
    });
    return (<View style={styles.container}>
      <AnimatedPressable style={[styles.pullDown, pulldownStyle]} onPress={() => scrollRef.current?.scrollTo({ y: 0, animated: true })}/>
      <Comp ref={r => {
            scrollRef.current = r;
            typeof ref == 'function' && ref(r);
        }} contentContainerStyle={[styles.top, styles.contentContainer]} scrollEventThrottle={16} keyboardShouldPersistTaps="handled" enableResetScrollToCoords={false} keyboardOpeningTime={Number.MAX_SAFE_INTEGER} {...rest} onScroll={scrollHandler} stickyHeaderIndices={[2]} refreshControl={Platform.select({
            ios: refreshControl && (<Animated.View style={progressStyle}>
              {refreshControl}
            </Animated.View>),
            android: refreshControl,
        })}>
        <Animated.View style={topNavStyle} onLayout={e => (h.value = e.nativeEvent.layout.height)}>
          {topHero}
        </Animated.View>
        {topView || <React.Fragment />}
        {topStickyView ? (<View style={styles.topStickyView} pointerEvents="box-none">
            {topStickyView}
          </View>) : (<React.Fragment />)}
        {listHeaderView || <React.Fragment />}
        {placeholder || <View style={[styles.content, style]}>{children}</View>}
      </Comp>
      {bottomView && <View style={styles.bottomView}>{bottomView}</View>}
    </View>);
});
