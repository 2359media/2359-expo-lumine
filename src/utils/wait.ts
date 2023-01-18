export function wait(ms: number = 0): Promise<void> {
  return new Promise(r => setTimeout(r, ms));
}
