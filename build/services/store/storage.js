import Storage from '@react-native-async-storage/async-storage';
import * as SecureStorage from 'expo-secure-store';
import { getEnv } from '../env';
const isMockStorage = () => getEnv() == 'dev';
function setItem(persistKey, value) {
    const key = persistKey.replace('persist:', '');
    if (isMockStorage()) {
        return Promise.reject();
    }
    return key.endsWith('secure')
        ? SecureStorage.setItemAsync(key, value)
        : Storage.setItem(key, value);
}
function getItem(persistKey) {
    const key = persistKey.replace('persist:', '');
    if (isMockStorage()) {
        return Promise.reject();
    }
    return key.endsWith('secure')
        ? SecureStorage.getItemAsync(key)
        : Storage.getItem(key);
}
function removeItem(persistKey) {
    const key = persistKey.replace('persist:', '');
    if (isMockStorage()) {
        return Promise.reject();
    }
    return key.endsWith('secure')
        ? SecureStorage.deleteItemAsync(key)
        : Storage.removeItem(key);
}
export default { setItem, getItem, removeItem };
//# sourceMappingURL=storage.js.map