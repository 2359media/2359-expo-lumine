import * as Updates from 'expo-updates';

function forSeconds(s: number) {
  return new Promise<void>(r => setTimeout(r, s * 1000));
}

export async function checkForUpdate(updateText: (t: string) => void) {
  const update = await Updates.checkForUpdateAsync();
  if (update.isAvailable) {
    updateText('Updating');
    try {
      await Updates.fetchUpdateAsync();
    } catch {}
    await Updates.reloadAsync();
    await forSeconds(2);
  }
}
