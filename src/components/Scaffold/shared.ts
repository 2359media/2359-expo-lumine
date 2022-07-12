import {useMemo} from 'react';
import {ScrollViewProps} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, createStyles} from '../../services/style';

export interface Props extends ScrollViewProps {
  topNav?: any;
  topHero?: any;
  topView?: any;
  topStickyView?: any;
  listHeaderView?: any;
  placeholder?: any;
  bottomView?: any;
  hasTabBar?: boolean;
  keyboardAware?: boolean;
  children?: any;
}

export function useSafeStyles(hasTabBar?: boolean) {
  const safeArea = useSafeAreaInsets();
  return useMemo(
    () =>
      createStyles({
        container: {
          flex: 1,
          paddingLeft: safeArea.left,
          paddingRight: safeArea.right,
          backgroundColor: colors.background,
        },
        top: {
          paddingTop: safeArea.top,
        },
        contentContainer: {
          paddingBottom: hasTabBar ? 0 : safeArea.bottom,
          flexGrow: 1,
        },
        content: {
          padding: 16,
        },
        contentFull: {
          flex: 1,
        },
        pullDown: {
          position: 'absolute',
          zIndex: 100,
          left: 0,
          right: 0,
          top: 0,
          paddingTop: safeArea.top,
          height: safeArea.top + 32,
          backgroundColor: colors.background,
          justifyContent: 'center',
          alignItems: 'center',
        },
        topStickyView: {
          marginTop: -safeArea.top - 32,
          paddingTop: safeArea.top + 32,
        },
        bottomView: {
          padding: 16,
          paddingBottom: safeArea.bottom + 16,
          backgroundColor: colors.white,
        },
      }),
    [safeArea, hasTabBar]
  );
}
