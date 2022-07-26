interface Modules {
  Font: {
    loadAsync(fonts: any): Promise;
    OpenSans_400Regular: any;
    OpenSans_600SemiBold: any;
    OpenSans_700Bold: any;
  };
  Storage: {
    getItem(key: string): Promise<any>;
    setItem(key: string, value: any): Promise<void>;
    removeItem(key: string): Promise<void>;
  };
  SecureStorage: {
    getItemAsync(key: string): Promise<any>;
    setItemAsync(key: string, value: any): Promise<void>;
    deleteItemAsync(key: string): Promise<void>;
  };
  Constants: {
    manifest?: {
      extra?: any;
    };
  };
  Navigation: {
    useNavigation: any;
    NavigationContainer: any;
    createNativeStackNavigator: any;
    createBottomTabNavigator: any;
  };
  DateTimePicker: any;
  Application: {
    nativeApplicationVersion: string;
    nativeBuildVersion: string;
  };
  SplashScreen: {
    preventAutoHideAsync(): Promise<void>;
    hideAsync(): Promise<void>;
  };
  Updates: {
    checkForUpdateAsync(): Promise<{isAvailable: boolean}>;
    fetchUpdateAsync(): Promise<void>;
    reloadAsync(): Promise<void>;
  };
  SafeArea: {
    useSafeAreaInsets(): {
      left: number;
      right: number;
      top: number;
      bottom: number;
    };
    SafeAreaProvider(props: {children: any}): any;
  };
}

declare const modules: Modules;

export default modules;
