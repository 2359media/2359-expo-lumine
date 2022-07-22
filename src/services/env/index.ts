import m from '../../../modules';

export type Env = 'dev' | 'staging' | 'prod' | 'default';

let currentEnv: Env = m.Constants.manifest?.extra?.env ?? 'dev';

export function selectEnv<T>(envs: Partial<{[key in Env]: T}>) {
  return (envs[currentEnv] ?? envs.default) as T;
}

export function setEnv(env?: Env) {
  console.log('Env: ' + env);
  if (env) {
    currentEnv = env;
    m.Storage.setItem('env', env);
  } else {
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
      currentEnv = env as Env;
    }
  } catch {}
}
