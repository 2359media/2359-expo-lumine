import {useMemo, Fragment} from 'react';

interface Modules {
  Font400Regular: Object;
  Font600SemiBold: Object;
  Font700Bold: Object;
  Font: {
    loadAsync(fonts: any): Promise<any>;
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
  Analytics: {
    useAnalytics(): {
      screen(name: string, body?: object): void;
      track(event: string, body?: object): void;
    };
  };
}

const modules: Modules = {
  Font: {
    loadAsync: () => Promise.reject(),
  },
  Font400Regular: {},
  Font600SemiBold: {},
  Font700Bold: {},
  Storage: {
    getItem: () => Promise.reject(),
    setItem: () => Promise.reject(),
    removeItem: () => Promise.reject(),
  },
  SecureStorage: {
    getItemAsync: () => Promise.reject(),
    setItemAsync: () => Promise.reject(),
    deleteItemAsync: () => Promise.reject(),
  },
  Constants: {},
  DateTimePicker: () => null,
  Application: {
    nativeApplicationVersion: '1.0',
    nativeBuildVersion: '1',
  },
  SplashScreen: {
    preventAutoHideAsync: () => Promise.resolve(),
    hideAsync: () => Promise.resolve(),
  },
  Updates: {
    checkForUpdateAsync: () => Promise.resolve({isAvailable: false}),
    fetchUpdateAsync: () => Promise.reject(),
    reloadAsync: () => Promise.reject(),
  },
  SafeArea: {
    useSafeAreaInsets: () =>
      useMemo(() => ({left: 0, right: 0, top: 0, bottom: 0}), []),
    SafeAreaProvider: Fragment,
  },
  Analytics: {
    useAnalytics: () => useMemo(() => ({screen() {}, track() {}}), []),
  },
};

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
export function registerModules(ms: Partial<Modules>) {
  Object.assign(modules, ms);
}
