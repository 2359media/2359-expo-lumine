/// <reference types="react" />
interface ModalConfig {
    position?: 'bottom' | 'center';
    disableBackHandler?: boolean;
    canHaveChildModal?: boolean;
}
export declare function showModal(component: (dismiss: () => void) => any, config?: ModalConfig): void;
export declare function AppModal(): JSX.Element;
export {};
