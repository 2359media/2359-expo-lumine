import React from 'react';
import {View} from 'react-native';
import {Props, useSafeStyles} from './shared';

export function SFView(props: Props) {
  const {
    style,
    contentContainerStyle,
    topNav,
    topHero,
    topView,
    topStickyView,
    hasTabBar,
    placeholder,
    bottomView,
    children,
  } = props;
  const styles = useSafeStyles(hasTabBar);
  return (
    <View
      style={[styles.container, styles.top, styles.contentContainer, style]}
    >
      {topNav}
      {topHero}
      {topView}
      {topStickyView}
      <View style={[styles.content, styles.contentFull, contentContainerStyle]}>
        {placeholder || children}
      </View>
      {bottomView}
    </View>
  );
}
