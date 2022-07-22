import React, {forwardRef} from 'react';
import {useRef} from 'react';
import {View, ScrollView, Pressable, Platform} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import r from '../../../modules/reanimated';
import {useSafeStyles, Props} from './shared';

const AnimatedKASV = r.Animated.createAnimatedComponent(
  KeyboardAwareScrollView
);
const AnimatedPressable = r.Animated.createAnimatedComponent(Pressable);

export const SFAScrollView = forwardRef<ScrollView, Props>((props, ref) => {
  const {
    style,
    topHero,
    topView,
    topStickyView,
    listHeaderView,
    placeholder,
    hasTabBar,
    bottomView,
    children,
    onScroll,
    keyboardAware,
    refreshControl,
    ...rest
  } = props;
  const Comp = keyboardAware ? AnimatedKASV : r.Animated.ScrollView;
  const styles = useSafeStyles(hasTabBar || !!bottomView);
  const scrollRef = useRef<ScrollView>();
  const offset = r.useSharedValue(0);
  const h = r.useSharedValue(100);
  const pulldownStyle = r.useAnimatedStyle(() => ({
    transform: [
      {
        translateY: r.interpolate(
          offset.value,
          [-1, 0, 1, 2].map(x => h.value + x),
          [-60, -60, 0, 0]
        ),
      },
    ],
    opacity: r.interpolate(
      offset.value,
      [-1, 0, 50, 51].map(x => h.value + x),
      [0, 0, 1, 1]
    ),
  }));
  const topNavStyle = r.useAnimatedStyle(() => ({
    zIndex: 100,
    transform: [{translateY: Math.min(offset.value, 0)}],
  }));
  const progressStyle = r.useAnimatedStyle(() => ({
    marginTop: h.value + styles.top.paddingTop,
    marginBottom: -(h.value + styles.top.paddingTop),
  }));
  const scrollHandler = r.useAnimatedScrollHandler(e => {
    offset.value = e.contentOffset.y;
    onScroll && r.runOnJS(onScroll)({nativeEvent: e} as any);
  });

  return (
    <View style={styles.container}>
      <AnimatedPressable
        style={[styles.pullDown, pulldownStyle]}
        onPress={() => scrollRef.current?.scrollTo({y: 0, animated: true})}
      />
      <Comp
        ref={r => {
          scrollRef.current = r as any;
          typeof ref == 'function' && ref(r as any);
        }}
        contentContainerStyle={[styles.top, styles.contentContainer]}
        scrollEventThrottle={16}
        keyboardShouldPersistTaps="handled"
        enableResetScrollToCoords={false}
        keyboardOpeningTime={Number.MAX_SAFE_INTEGER}
        {...rest}
        onScroll={scrollHandler}
        stickyHeaderIndices={[2]}
        refreshControl={Platform.select({
          ios: refreshControl && (
            <r.Animated.View style={progressStyle}>
              {refreshControl}
            </r.Animated.View>
          ),
          android: refreshControl,
        })}
      >
        <r.Animated.View
          style={topNavStyle}
          onLayout={e => (h.value = e.nativeEvent.layout.height)}
        >
          {topHero}
        </r.Animated.View>
        {topView || <React.Fragment />}
        {topStickyView ? (
          <View style={styles.topStickyView} pointerEvents="box-none">
            {topStickyView}
          </View>
        ) : (
          <React.Fragment />
        )}
        {listHeaderView || <React.Fragment />}
        {placeholder || <View style={[styles.content, style]}>{children}</View>}
      </Comp>
      {bottomView && <View style={styles.bottomView}>{bottomView}</View>}
    </View>
  );
});
