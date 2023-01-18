import React from 'react';
import { NavigationContainerRef, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
export declare function createNavigator<T extends ParamListBase>(): {
    navigate: <K extends keyof T>(...args: T[K] extends object ? [K, T[K]] : [K]) => void;
    useNavigation: () => NativeStackNavigationProp<T, string, undefined>;
    goBack: () => void;
    NavigationContainer: (props: import("@react-navigation/native").NavigationContainerProps & {
        theme?: import("@react-navigation/native").Theme | undefined;
        linking?: import("@react-navigation/native").LinkingOptions<T> | undefined;
        fallback?: React.ReactNode;
        documentTitle?: import("@react-navigation/native").DocumentTitleOptions | undefined;
        onReady?: (() => void) | undefined;
    } & {
        ref?: React.Ref<NavigationContainerRef<T>> | undefined;
    }) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    createScreen: <K_1 extends keyof T>(key: K_1, Screen: (props: (T[K_1] extends undefined ? Object : T[K_1]) & {
        children?: any;
    }) => any) => (props: (T[K_1] extends undefined ? Object : T[K_1]) & {
        children?: any;
    }) => any;
    getScreen: <K_2 extends keyof T>(key: K_2) => (props: (T[K_2] extends undefined ? Object : T[K_2]) & {
        children?: any;
    }) => any;
    createNativeStackNavigator: () => import("@react-navigation/native").TypedNavigator<T, import("@react-navigation/native").StackNavigationState<ParamListBase>, import("@react-navigation/native-stack").NativeStackNavigationOptions, import("@react-navigation/native-stack").NativeStackNavigationEventMap, ({ id, initialRouteName, children, screenListeners, screenOptions, ...rest }: import("@react-navigation/native-stack/lib/typescript/src/types").NativeStackNavigatorProps) => JSX.Element>;
    createBottomTabsNavigator: () => import("@react-navigation/native").TypedNavigator<T, import("@react-navigation/native").TabNavigationState<ParamListBase>, import("@react-navigation/bottom-tabs").BottomTabNavigationOptions, import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, ({ id, initialRouteName, backBehavior, children, screenListeners, screenOptions, sceneContainerStyle, ...restWithDeprecated }: import("@react-navigation/native").DefaultRouterOptions<string> & {
        id?: string | undefined;
        children: React.ReactNode;
        screenListeners?: Partial<{
            tabPress: import("@react-navigation/native").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "tabPress">;
            tabLongPress: import("@react-navigation/native").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "tabLongPress">;
            focus: import("@react-navigation/native").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "focus">;
            blur: import("@react-navigation/native").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "blur">;
            state: import("@react-navigation/native").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "state">;
            beforeRemove: import("@react-navigation/native").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "beforeRemove">;
        }> | ((props: {
            route: import("@react-navigation/native").RouteProp<ParamListBase, string>;
            navigation: any;
        }) => Partial<{
            tabPress: import("@react-navigation/native").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "tabPress">;
            tabLongPress: import("@react-navigation/native").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "tabLongPress">;
            focus: import("@react-navigation/native").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "focus">;
            blur: import("@react-navigation/native").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "blur">;
            state: import("@react-navigation/native").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "state">;
            beforeRemove: import("@react-navigation/native").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "beforeRemove">;
        }>) | undefined;
        screenOptions?: import("@react-navigation/bottom-tabs").BottomTabNavigationOptions | ((props: {
            route: import("@react-navigation/native").RouteProp<ParamListBase, string>;
            navigation: any;
        }) => import("@react-navigation/bottom-tabs").BottomTabNavigationOptions) | undefined;
        defaultScreenOptions?: import("@react-navigation/bottom-tabs").BottomTabNavigationOptions | ((props: {
            route: import("@react-navigation/native").RouteProp<ParamListBase, string>;
            navigation: any;
            options: import("@react-navigation/bottom-tabs").BottomTabNavigationOptions;
        }) => import("@react-navigation/bottom-tabs").BottomTabNavigationOptions) | undefined;
    } & {
        backBehavior?: import("@react-navigation/routers/lib/typescript/src/TabRouter").BackBehavior | undefined;
    } & import("@react-navigation/bottom-tabs/lib/typescript/src/types").BottomTabNavigationConfig) => JSX.Element>;
};
