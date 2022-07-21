import React, {useMemo} from 'react';
import {StatusBar} from 'react-native';
import {AppProvider, ThemeContext, defaultTheme, darkTheme} from '..';
import {
  NavigationContainer,
  createNativeStackNavigator,
  getScreen,
} from './services/navigation';
import {loadStore, useSelector} from './services/store';
import './screens/LandingScreen';
import './screens/MainScreen';
import './screens/ProductsScreen';
import './screens/ProductDetailsScreen';
export {Product, addProduct} from './services/product';

export default function App() {
  const Stack = useMemo(createNativeStackNavigator, []);
  const themeIndex = useSelector(s => s.settings.themeIndex);
  return (
    <ThemeContext.Provider value={themeIndex ? darkTheme : defaultTheme}>
      <AppProvider asyncs={[loadStore]}>
        <StatusBar
          barStyle={themeIndex ? 'light-content' : 'dark-content'}
          translucent
          backgroundColor="transparent"
        />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Landing" component={getScreen('Landing')} />
            <Stack.Screen name="Main" component={getScreen('Main')} />
            <Stack.Screen name="Products" component={getScreen('Products')} />
            <Stack.Screen
              name="ProductDetails"
              component={getScreen('ProductDetails')}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppProvider>
    </ThemeContext.Provider>
  );
}
