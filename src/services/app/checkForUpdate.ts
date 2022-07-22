import m from '../../../modules';

function forSeconds(s: number) {
  return new Promise<void>(r => setTimeout(r, s * 1000));
}

export async function checkForUpdate(updateText: (t: string) => void) {
  const update = await m.Updates.checkForUpdateAsync();
  if (update.isAvailable) {
    updateText('Updating');
    try {
      await m.Updates.fetchUpdateAsync();
    } catch {}
    await m.Updates.reloadAsync();
    await forSeconds(2);
  }
}
