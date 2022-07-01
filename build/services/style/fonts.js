import { loadAsync } from 'expo-font';
function getDefaultFonts() {
    return {
        OpenSans_400Regular: require('@expo-google-fonts/open-sans/OpenSans_400Regular.ttf'),
        OpenSans_600SemiBold: require('@expo-google-fonts/open-sans/OpenSans_600SemiBold.ttf'),
        OpenSans_700Bold: require('@expo-google-fonts/open-sans/OpenSans_700Bold.ttf'),
    };
}
export async function loadFonts() {
    await loadAsync(getDefaultFonts());
}
export const fonts = {
    /** regular */ primary400: 'OpenSans_400Regular',
    /** medium */ primary600: 'OpenSans_600SemiBold',
    /** bold */ primary700: 'OpenSans_700Bold',
};
