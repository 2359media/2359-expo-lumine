import Constants from 'expo-constants';
import Storage from '@react-native-async-storage/async-storage';

export type Env = 'dev' | 'staging' | 'prod' | 'default';

let currentEnv: Env = Constants.manifest?.extra?.env ?? 'dev';

export function selectEnv<T>(envs: Partial<{[key in Env]: T}>) {
  return (envs[currentEnv] ?? envs.default) as T;
}

export function setEnv(env?: Env) {
  console.log('Env: ' + env);
  if (env) {
    currentEnv = env;
    Storage.setItem('env', env);
  } else {
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
      currentEnv = env as Env;
    }
  } catch {}
}
