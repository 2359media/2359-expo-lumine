import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LandingScreen} from './screens/LandingScreen';
import {MainScreen} from './screens/MainScreen';
import {loadStore, useSelector} from './services/store';
import {AppProvider, ThemeContext, defaultTheme} from '..';

export default function App() {
  const Stack = useMemo(createNativeStackNavigator, []);
  const theme = useSelector(s => s.settings.theme);
  return (
    <AppProvider asyncs={[loadStore]}>
      <ThemeContext.Provider value={theme ?? defaultTheme}>
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
