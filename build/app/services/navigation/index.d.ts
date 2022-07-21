/// <reference types="react" />
export declare const NavigationContainer: (props: import("@react-navigation/core").NavigationContainerProps) => JSX.Element, createNativeStackNavigator: () => import("@react-navigation/core").TypedNavigator<{
    Landing: undefined;
    Main: undefined;
    Products: {
        groupId: string;
    };
    ProductDetails: {
        id: string;
    };
}, import("@react-navigation/routers").StackNavigationState<import("@react-navigation/routers").ParamListBase>, import("@react-navigation/native-stack").NativeStackNavigationOptions, import("@react-navigation/native-stack").NativeStackNavigationEventMap, ({ id, initialRouteName, children, screenListeners, screenOptions, ...rest }: import("@react-navigation/native-stack/lib/typescript/src/types").NativeStackNavigatorProps) => JSX.Element>, createScreen: <K extends "Landing" | "Main" | "Products" | "ProductDetails">(key: K, Screen: (props: ({
    Landing: undefined;
    Main: undefined;
    Products: {
        groupId: string;
    };
    ProductDetails: {
        id: string;
    };
}[K] extends undefined ? {} : {
    Landing: undefined;
    Main: undefined;
    Products: {
        groupId: string;
    };
    ProductDetails: {
        id: string;
    };
}[K]) & {
    children?: any;
}) => any) => (props: ({
    Landing: undefined;
    Main: undefined;
    Products: {
        groupId: string;
    };
    ProductDetails: {
        id: string;
    };
}[K] extends undefined ? {} : {
    Landing: undefined;
    Main: undefined;
    Products: {
        groupId: string;
    };
    ProductDetails: {
        id: string;
    };
}[K]) & {
    children?: any;
}) => any, getScreen: <K extends "Landing" | "Main" | "Products" | "ProductDetails">(key: K) => (props: ({
    Landing: undefined;
    Main: undefined;
    Products: {
        groupId: string;
    };
    ProductDetails: {
        id: string;
    };
}[K] extends undefined ? {} : {
    Landing: undefined;
    Main: undefined;
    Products: {
        groupId: string;
    };
    ProductDetails: {
        id: string;
    };
}[K]) & {
    children?: any;
}) => any, goBack: () => void, navigate: <K extends "Landing" | "Main" | "Products" | "ProductDetails">(...args: {
    Landing: undefined;
    Main: undefined;
    Products: {
        groupId: string;
    };
    ProductDetails: {
        id: string;
    };
}[K] extends object ? [K, {
    Landing: undefined;
    Main: undefined;
    Products: {
        groupId: string;
    };
    ProductDetails: {
        id: string;
    };
}[K]] : [K]) => void, useNavigation: () => import("@react-navigation/native-stack").NativeStackNavigationProp<{
    Landing: undefined;
    Main: undefined;
    Products: {
        groupId: string;
    };
    ProductDetails: {
        id: string;
    };
}, string, undefined>, createBottomTabsNavigator: () => import("@react-navigation/core").TypedNavigator<{
    Landing: undefined;
    Main: undefined;
    Products: {
        groupId: string;
    };
    ProductDetails: {
        id: string;
    };
}, import("@react-navigation/routers").TabNavigationState<import("@react-navigation/routers").ParamListBase>, import("@react-navigation/bottom-tabs").BottomTabNavigationOptions, import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, ({ id, initialRouteName, backBehavior, children, screenListeners, screenOptions, sceneContainerStyle, ...restWithDeprecated }: import("@react-navigation/routers").DefaultRouterOptions<string> & {
    id?: string | undefined;
    children: import("react").ReactNode;
    screenListeners?: Partial<{
        tabPress: import("@react-navigation/core").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "tabPress">;
        tabLongPress: import("@react-navigation/core").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "tabLongPress">;
        focus: import("@react-navigation/core").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "focus">;
        blur: import("@react-navigation/core").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "blur">;
        state: import("@react-navigation/core").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "state">;
        beforeRemove: import("@react-navigation/core").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "beforeRemove">;
    }> | ((props: {
        route: import("@react-navigation/core").RouteProp<import("@react-navigation/routers").ParamListBase, string>;
        navigation: any;
    }) => Partial<{
        tabPress: import("@react-navigation/core").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "tabPress">;
        tabLongPress: import("@react-navigation/core").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "tabLongPress">;
        focus: import("@react-navigation/core").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "focus">;
        blur: import("@react-navigation/core").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "blur">;
        state: import("@react-navigation/core").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "state">;
        beforeRemove: import("@react-navigation/core").EventListenerCallback<import("@react-navigation/bottom-tabs").BottomTabNavigationEventMap, "beforeRemove">;
    }>) | undefined;
    screenOptions?: import("@react-navigation/bottom-tabs").BottomTabNavigationOptions | ((props: {
        route: import("@react-navigation/core").RouteProp<import("@react-navigation/routers").ParamListBase, string>;
        navigation: any;
    }) => import("@react-navigation/bottom-tabs").BottomTabNavigationOptions) | undefined;
    defaultScreenOptions?: import("@react-navigation/bottom-tabs").BottomTabNavigationOptions | ((props: {
        route: import("@react-navigation/core").RouteProp<import("@react-navigation/routers").ParamListBase, string>;
        navigation: any;
        options: import("@react-navigation/bottom-tabs").BottomTabNavigationOptions;
    }) => import("@react-navigation/bottom-tabs").BottomTabNavigationOptions) | undefined;
} & {
    backBehavior?: import("@react-navigation/routers/lib/typescript/src/TabRouter").BackBehavior | undefined;
} & import("@react-navigation/bottom-tabs/lib/typescript/src/types").BottomTabNavigationConfig) => JSX.Element>;
