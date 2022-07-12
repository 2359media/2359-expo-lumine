import { useNavigation as useNav, NavigationContainer as NC, } from '@react-navigation/native';
import { createNativeStackNavigator as CNSN, } from '@react-navigation/native-stack';
import { createBottomTabNavigator as CBTN } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
export function createNavigator() {
    let nav;
    function NavigationContainer(props) {
        return <NC ref={r => (nav = r)} {...props}/>;
    }
    function useNavigation() {
        return useNav();
    }
    const screens = {};
    function createScreen(key, screen) {
        screens[key] = screen;
        if (__DEV__) {
            setTimeout(() => {
                nav?.setParams(nav.getCurrentRoute()?.params);
            }, 200);
        }
        return screen;
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
