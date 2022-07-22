const modules = {};

try {
  modules.Font = {
    loadAsync: require('expo-font').loadAsync,
    OpenSans_400Regular: require('@expo-google-fonts/open-sans/OpenSans_400Regular.ttf'),
    OpenSans_600SemiBold: require('@expo-google-fonts/open-sans/OpenSans_600SemiBold.ttf'),
    OpenSans_700Bold: require('@expo-google-fonts/open-sans/OpenSans_700Bold.ttf'),
  };
} catch {
  modules.Font = {
    loadAsync: () => Promise.reject(),
    OpenSans_400Regular: undefined,
    OpenSans_600SemiBold: undefined,
    OpenSans_700Bold: undefined,
  };
}

try {
  modules.Storage =
    require('@react-native-async-storage/async-storage').default;
} catch {
  modules.Storage = {
    getItem: () => Promise.reject(),
    setItem: () => Promise.reject(),
    removeItem: () => Promise.reject(),
  };
}

try {
  modules.SecureStorage = require('expo-secure-store');
} catch {
  modules.SecureStorage = {
    getItemAsync: () => Promise.reject(),
    setItemAsync: () => Promise.reject(),
    deleteItemAsync: () => Promise.reject(),
  };
}

try {
  modules.Constants = require('expo-constants').default;
} catch {
  modules.Constants = {};
}

try {
  modules.DateTimePicker =
    require('@react-native-community/datetimepicker').default;
} catch {
  modules.DateTimePicker = () => null;
}

try {
  modules.Application = require('expo-application');
} catch {
  modules.Application = {
    nativeApplicationVersion: '1.0',
    nativeBuildVersion: '1',
  };
}

try {
  modules.SplashScreen = require('expo-splash-screen');
} catch {
  modules.SplashScreen = {
    preventAutoHideAsync: () => Promise.resolve(),
    hideAsync: () => Promise.resolve(),
  };
}

try {
  modules.Updates = require('expo-updates');
} catch {
  modules.Updates = {
    checkForUpdateAsync: () => Promise.resolve({isAvailable: false}),
    fetchUpdateAsync: () => Promise.reject(),
    reloadAsync: () => Promise.reject(),
  };
}

try {
  modules.SafeArea = require('react-native-safe-area-context');
} catch {
  const insets = {left: 0, right: 0, top: 0, bottom: 0};
  modules.SafeArea = {
    useSafeAreaInsets: () => insets,
    SafeAreaProvider: require('react').Fragment,
  };
}

export default modules;
