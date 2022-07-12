import React from 'react';
import { View } from 'react-native';
import { useSafeStyles } from './shared';
export function SFView(props) {
    const { style, topNav, topHero, topView, topStickyView, hasTabBar, placeholder, bottomView, children, } = props;
    const styles = useSafeStyles(hasTabBar);
    return (<View style={[styles.container, styles.top, styles.contentContainer]}>
      {topNav}
      {topHero}
      {topView}
      {topStickyView}
      <View style={[styles.content, styles.contentFull, style]}>
        {placeholder || children}
      </View>
      {bottomView}
    </View>);
}
