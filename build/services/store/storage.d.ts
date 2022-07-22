declare function setItem(persistKey: string, value: any): Promise<void>;
declare function getItem(persistKey: string): Promise<any>;
declare function removeItem(persistKey: string): Promise<void>;
declare const _default: {
    setItem: typeof setItem;
    getItem: typeof getItem;
    removeItem: typeof removeItem;
};
export default _default;
