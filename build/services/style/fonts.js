import m from '../../../modules';
export async function loadFonts() {
    await m.Font.loadAsync({
        OpenSans_400Regular: m.Font.OpenSans_400Regular,
        OpenSans_600SemiBold: m.Font.OpenSans_600SemiBold,
        OpenSans_700Bold: m.Font.OpenSans_700Bold,
    });
    fonts.primary400 = 'OpenSans_400Regular';
    fonts.primary600 = 'OpenSans_600SemiBold';
    fonts.primary700 = 'OpenSans_700Bold';
}
export const fonts = {};
