import {useContext, useCallback} from 'react';
import {
  NavigationContainerRef,
  useNavigation as useNav,
  NavigationContainer as NC,
  ParamListBase,
  useFocusEffect,
} from '@react-navigation/native';
import {
  createNativeStackNavigator as CNSN,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {createBottomTabNavigator as CBTN} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import m from '../../../modules';
import {ThemeContext} from '../style';

export function createNavigator<T extends ParamListBase>() {
  type KR = keyof T; //key routes
  type R<K extends KR> = T[K] extends undefined ? {} : T[K]; //route
  type S<K extends KR> = (props: R<K> & {children?: any}) => any; //screen

  let nav: NavigationContainerRef<T> | null;

  const NavigationContainer: typeof NC<T> = props => {
    const theme = useContext(ThemeContext);
    return <NC<T> ref={r => (nav = r)} theme={theme} {...props} />;
  };

  function useNavigation() {
    return useNav<NativeStackNavigationProp<T>>();
  }

  const screens: any = {};

  function createScreen<K extends KR>(key: K, Screen: S<K>) {
    screens[key] = function (p: any) {
      const params = p.route?.params;

      //track screen
      const {screen} = m.Analytics.useAnalytics();
      useFocusEffect(
        useCallback(() => {
          screen(key as string, params);
        }, [])
      );

      return <Screen {...params} />;
    };
    if (__DEV__) {
      setTimeout(() => {
        nav?.setParams(nav.getCurrentRoute()?.params as any);
      }, 200);
    }
    return Screen;
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
