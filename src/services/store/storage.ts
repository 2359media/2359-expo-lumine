import m from '../../../modules';
import {getEnv} from '../env';

const isMockStorage = () => getEnv() == 'dev';

function setItem(persistKey: string, value: any) {
  const key = persistKey.replace('persist:', '');
  if (isMockStorage()) {
    return Promise.reject();
  }
  return key.endsWith('secure')
    ? m.SecureStorage.setItemAsync(key, value)
    : m.Storage.setItem(key, value);
}

function getItem(persistKey: string) {
  const key = persistKey.replace('persist:', '');
  if (isMockStorage()) {
    return Promise.reject();
  }
  return key.endsWith('secure')
    ? m.SecureStorage.getItemAsync(key)
    : m.Storage.getItem(key);
}

function removeItem(persistKey: string) {
  const key = persistKey.replace('persist:', '');
  if (isMockStorage()) {
    return Promise.reject();
  }
  return key.endsWith('secure')
    ? m.SecureStorage.deleteItemAsync(key)
    : m.Storage.removeItem(key);
}

export default {setItem, getItem, removeItem};
