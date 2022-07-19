import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LandingScreen} from './screens/LandingScreen';
import {MainScreen} from './screens/MainScreen';
import {AppProvider} from '..';

export default function App() {
  const Stack = useMemo(createNativeStackNavigator, []);
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="landing" component={LandingScreen} />
          <Stack.Screen name="main" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
