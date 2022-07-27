interface Modules {
  Font400Regular: Object;
  Font600SemiBold: Object;
  Font700Bold: Object;
  Font: {
    loadAsync(fonts: any): Promise;
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

/**
 * ```ts
 * {
 *   Font: require('expo-font'),
 *   Font400Regular: {
 *     OpenSans_400Regular: require('@expo-google-fonts/open-sans/OpenSans_400Regular.ttf'),
 *   },
 *   Font600SemiBold: {
 *     OpenSans_600SemiBold: require('@expo-google-fonts/open-sans/OpenSans_600SemiBold.ttf'),
 *   },
 *   Font700Bold: {
 *     OpenSans_700Bold: require('@expo-google-fonts/open-sans/OpenSans_700Bold.ttf'),
 *   },
 *   DateTimePicker: require('@react-native-community/datetimepicker').default,
 *   SafeArea: require('react-native-safe-area-context'),
 *   Application: require('expo-application'),
 *   Constants: require('expo-constants').default,
 *   Storage: require('@react-native-async-storage/async-storage').default,
 *   SecureStorage: require('expo-secure-store'),
 *   Updates: require('expo-updates'),
 * }
 * ```
 */
export declare function registerModules(m: Partial<Modules>);
