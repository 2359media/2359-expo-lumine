import React, {createContext, useState} from 'react';
import {ViewProps} from 'react-native';
import {Config} from './config';

const Context = createContext<Config>({});

interface Props extends ViewProps {
  initialConfig?: Config;
}

let _setConfig = (c: Config) {};

export function setConfig(c: Config) {
  _setConfig(c);
}

export function addConfigListener() {

}

export function AppProvider(props: Props) {
  const [value, setValue] = useState(props.initialConfig);
  _setConfig = setValue;
  return <Context.Provider value={{}}>{props.children}</Context.Provider>;
}
