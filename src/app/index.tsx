import React, {useMemo} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LandingScreen} from './screens/LandingScreen';
import {MainScreen} from './screens/MainScreen';
import {loadStore, useSelector} from './services/store';
import {AppProvider, ThemeContext, defaultTheme, darkTheme} from '..';

export default function App() {
  const Stack = useMemo(createNativeStackNavigator, []);
  const themeIndex = useSelector(s => s.settings.themeIndex);
  return (
    <AppProvider asyncs={[loadStore]}>
      <ThemeContext.Provider value={themeIndex ? darkTheme : defaultTheme}>
        <StatusBar barStyle={themeIndex ? 'light-content' : 'dark-content'} />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="landing" component={LandingScreen} />
            <Stack.Screen name="main" component={MainScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeContext.Provider>
    </AppProvider>
  );
}
