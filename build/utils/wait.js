export function wait(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
}
