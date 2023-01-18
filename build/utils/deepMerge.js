export function deepMerge(s1, s2) {
    if (s1 && s2 && s1 !== s2 && typeof s2 == 'object' && !Array.isArray(s2)) {
        const sx = { ...s1 };
        Object.keys(s2).forEach(k => (sx[k] = deepMerge(s1[k], s2[k])));
        return sx;
    }
    return s2;
}
