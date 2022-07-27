const modules = {
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
      require('react').useMemo(
        () => ({left: 0, right: 0, top: 0, bottom: 0}),
        []
      ),
    SafeAreaProvider: require('react').Fragment,
  },
};

export default modules;

export function registerModules(ms) {
  Object.assign(modules, ms);
}
