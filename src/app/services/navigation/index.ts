import {createNavigator} from '../../..';

export const {
  NavigationContainer,
  createNativeStackNavigator,
  createScreen,
  getScreen,
  goBack,
  navigate,
  useNavigation,
  createBottomTabsNavigator,
} = createNavigator<{
  Landing: undefined;
  Main: undefined;
  Products: {groupId: string};
  ProductDetails: {id: string};
}>();
