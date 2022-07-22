import m from '../../../modules';
let currentEnv = m.Constants.manifest?.extra?.env ?? 'dev';
export function selectEnv(envs) {
    return (envs[currentEnv] ?? envs.default);
}
export function setEnv(env) {
    console.log('Env: ' + env);
    if (env) {
        currentEnv = env;
        m.Storage.setItem('env', env);
    }
    else {
        currentEnv = m.Constants.manifest?.extra?.env ?? 'dev';
        m.Storage.removeItem('env');
    }
}
export function getEnv() {
    return currentEnv;
}
export async function loadEnv() {
    try {
        const env = await m.Storage.getItem('env');
        if (env) {
            currentEnv = env;
        }
    }
    catch { }
}
