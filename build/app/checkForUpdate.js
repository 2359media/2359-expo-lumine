import m from '../modules';
function forSeconds(s) {
    return new Promise(r => setTimeout(r, s * 1000));
}
export async function checkForUpdate(updateText) {
    const update = await m.Updates.checkForUpdateAsync();
    if (update.isAvailable) {
        updateText('Updating');
        try {
            await m.Updates.fetchUpdateAsync();
        }
        catch { }
        await m.Updates.reloadAsync();
        await forSeconds(2);
    }
}
