interface ModalConfig {
    position?: 'bottom' | 'center';
    disableBackHandler?: boolean;
}
export declare function showModal(component: (dismiss: () => void) => any, config?: ModalConfig): void;
export declare function ModalContainer(): JSX.Element;
export {};
