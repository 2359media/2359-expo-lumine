import {createContext} from 'react';
import {APIConfig} from './types';

export const APIContext = createContext<APIConfig>({
  client() {
    return Promise.reject('No client provided');
  },
});
