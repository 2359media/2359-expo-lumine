import React, { forwardRef } from 'react';
import { View, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeStyles } from './shared';
export const SFScrollView = forwardRef((props, ref) => {
    const { style, topNav, topView, topStickyView, listHeaderView, hasTabBar, bottomView, placeholder, children, keyboardAware, ...rest } = props;
    const styles = useSafeStyles(hasTabBar || !!bottomView);
    const Comp = keyboardAware ? KeyboardAwareScrollView : ScrollView;
    return (<View style={[styles.container, styles.top]}>
      {topNav}
      <Comp ref={ref} contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps="handled" enableResetScrollToCoords={false} keyboardOpeningTime={Number.MAX_SAFE_INTEGER} {...rest} stickyHeaderIndices={[1]}>
        {topView || <React.Fragment />}
        {topStickyView || <React.Fragment />}
        {listHeaderView || <React.Fragment />}
        {placeholder || <View style={[styles.content, style]}>{children}</View>}
      </Comp>
      {bottomView && <View style={styles.bottomView}>{bottomView}</View>}
    </View>);
});
