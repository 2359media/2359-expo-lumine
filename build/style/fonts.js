import m from '../modules';
export async function loadFonts() {
    await m.Font.loadAsync({
        ...m.Font400Regular,
        ...m.Font600SemiBold,
        ...m.Font700Bold,
    });
    fonts.primary400 = Object.keys(m.Font400Regular)[0];
    fonts.primary600 = Object.keys(m.Font600SemiBold)[0];
    fonts.primary700 = Object.keys(m.Font700Bold)[0];
}
export const fonts = {};
