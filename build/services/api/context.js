import { createContext } from 'react';
export const APIContext = createContext({
    client() {
        return Promise.reject('No client provided');
    },
});
