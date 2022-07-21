import { useMemo, useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyles, ThemeContext } from '../../services/style';
export function useSafeStyles(hasTabBar) {
    const safeArea = useSafeAreaInsets();
    const { colors } = useContext(ThemeContext);
    return useMemo(() => createStyles({
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
            padding: 24,
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
            padding: 24,
            paddingBottom: safeArea.bottom + 24,
            backgroundColor: colors.background,
        },
    }), [safeArea, hasTabBar, colors]);
}
