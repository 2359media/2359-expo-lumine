import m from '../../../modules';
function setItem(persistKey, value) {
    const key = persistKey.replace('persist:', '');
    return key.endsWith('secure')
        ? m.SecureStorage.setItemAsync(key, value)
        : m.Storage.setItem(key, value);
}
function getItem(persistKey) {
    const key = persistKey.replace('persist:', '');
    return key.endsWith('secure')
        ? m.SecureStorage.getItemAsync(key)
        : m.Storage.getItem(key);
}
function removeItem(persistKey) {
    const key = persistKey.replace('persist:', '');
    return key.endsWith('secure')
        ? m.SecureStorage.deleteItemAsync(key)
        : m.Storage.removeItem(key);
}
export default { setItem, getItem, removeItem };
