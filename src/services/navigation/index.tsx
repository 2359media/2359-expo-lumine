import {
  NavigationContainerRef,
  NavigationContainerProps,
  useNavigation as useNav,
  NavigationContainer as NC,
  ParamListBase,
} from '@react-navigation/native';
import {
  createNativeStackNavigator as CNSN,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {createBottomTabNavigator as CBTN} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';

export function createNavigator<T extends ParamListBase>() {
  type KR = keyof T; //key routes
  type R<K extends KR> = T[K] extends undefined ? {} : T[K]; //route
  type S<K extends KR> = (props: R<K> & {children?: any}) => any; //screen

  let nav: NavigationContainerRef<T> | null;

  function NavigationContainer(props: NavigationContainerProps) {
    return <NC<T> ref={r => (nav = r)} {...props} />;
  }

  function useNavigation() {
    return useNav<NativeStackNavigationProp<T>>();
  }

  const screens: any = {};

  function createScreen<K extends KR>(key: K, screen: S<K>) {
    screens[key] = screen;
    if (__DEV__) {
      setTimeout(() => {
        nav?.setParams(nav.getCurrentRoute()?.params as any);
      }, 200);
    }
    return screen;
  }

  function getScreen<K extends KR>(key: K): S<K> {
    return screens[key] ?? NoScreen;
  }

  function createNativeStackNavigator() {
    return CNSN<T>();
  }

  function createBottomTabsNavigator() {
    return CBTN<T>();
  }

  function navigate<K extends KR>(
    ...args: T[K] extends object ? [K, T[K]] : [K]
  ) {
    nav?.navigate(...(args as any));
  }

  function goBack() {
    nav?.goBack();
  }

  return {
    navigate,
    useNavigation,
    goBack,
    NavigationContainer,
    createScreen,
    getScreen,
    createNativeStackNavigator,
    createBottomTabsNavigator,
  };
}

function NoScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center'}}>Screen is not yet implemented.</Text>
    </View>
  );
}
