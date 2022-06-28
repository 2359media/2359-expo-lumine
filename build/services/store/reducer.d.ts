import { State } from './state';
export declare const actionTypes: {
    update: string;
    reset: string;
};
export default function (state: State | undefined, action: any): State;
