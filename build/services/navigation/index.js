import { useContext, useCallback } from 'react';
import { useNavigation as useNav, NavigationContainer as NC, useFocusEffect, } from '@react-navigation/native';
import { createNativeStackNavigator as CNSN, } from '@react-navigation/native-stack';
import { createBottomTabNavigator as CBTN } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import m from '../../../modules';
import { ThemeContext } from '../style';
export function createNavigator() {
    let nav;
    const NavigationContainer = props => {
        const theme = useContext(ThemeContext);
        return <NC ref={r => (nav = r)} theme={theme} {...props}/>;
    };
    function useNavigation() {
        return useNav();
    }
    const screens = {};
    function createScreen(key, Screen) {
        screens[key] = function (p) {
            const params = p.route?.params;
            //track screen
            const { screen } = m.Analytics.useAnalytics();
            useFocusEffect(useCallback(() => {
                screen(key, params);
            }, []));
            return <Screen {...params}/>;
        };
        if (__DEV__) {
            setTimeout(() => {
                nav?.setParams(nav.getCurrentRoute()?.params);
            }, 200);
        }
        return Screen;
    }
    function getScreen(key) {
        return screens[key] ?? NoScreen;
    }
    function createNativeStackNavigator() {
        return CNSN();
    }
    function createBottomTabsNavigator() {
        return CBTN();
    }
    function navigate(...args) {
        nav?.navigate(...args);
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
    return (<View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ textAlign: 'center' }}>Screen is not yet implemented.</Text>
    </View>);
}
