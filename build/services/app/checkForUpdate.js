import * as Updates from 'expo-updates';
function forSeconds(s) {
    return new Promise(r => setTimeout(r, s * 1000));
}
export async function checkForUpdate(updateText) {
    const update = await Updates.checkForUpdateAsync();
    if (update.isAvailable) {
        updateText('Updating');
        try {
            await Updates.fetchUpdateAsync();
        }
        catch { }
        await Updates.reloadAsync();
        await forSeconds(2);
    }
}
