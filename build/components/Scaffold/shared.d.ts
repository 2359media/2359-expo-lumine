import { ScrollViewProps } from 'react-native';
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
export declare function useSafeStyles(hasTabBar?: boolean): {
    container: {
        flex: number;
        paddingLeft: number;
        paddingRight: number;
        backgroundColor: string;
    };
    top: {
        paddingTop: number;
    };
    contentContainer: {
        paddingBottom: number;
        flexGrow: number;
    };
    content: {
        padding: number;
    };
    contentFull: {
        flex: number;
    };
    pullDown: {
        position: "absolute";
        zIndex: number;
        left: number;
        right: number;
        top: number;
        paddingTop: number;
        height: number;
        backgroundColor: string;
        justifyContent: "center";
        alignItems: "center";
    };
    topStickyView: {
        marginTop: number;
        paddingTop: number;
    };
    bottomView: {
        padding: number;
        paddingBottom: number;
        backgroundColor: string;
    };
};
