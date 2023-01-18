export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export function deepMerge<T>(s1: T, s2: DeepPartial<T>): T {
  if (s1 && s2 && s1 !== s2 && typeof s2 == 'object' && !Array.isArray(s2)) {
    const sx: any = {...s1};
    Object.keys(s2).forEach(
      k => (sx[k] = deepMerge((s1 as any)[k], (s2 as any)[k]))
    );
    return sx;
  }
  return s2 as T;
}
