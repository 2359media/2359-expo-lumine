import Constants from 'expo-constants';
import Storage from '@react-native-async-storage/async-storage';
let currentEnv = Constants.manifest?.extra?.env ?? 'dev';
export function selectEnv(envs) {
    return (envs[currentEnv] ?? envs.default);
}
export function setEnv(env) {
    console.log('Env: ' + env);
    if (env) {
        currentEnv = env;
        Storage.setItem('env', env);
    }
    else {
        currentEnv = Constants.manifest?.extra?.env ?? 'dev';
        Storage.removeItem('env');
    }
}
export function getEnv() {
    return currentEnv;
}
export async function loadEnv() {
    try {
        const env = await Storage.getItem('env');
        if (env) {
            currentEnv = env;
        }
    }
    catch { }
}
//# sourceMappingURL=index.js.map