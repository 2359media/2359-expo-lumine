import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Text, Button} from '..';

type Options<T extends Object> = Partial<{[key in keyof T]: T[key][]}>;

interface Helpers<T extends Object> {
  setState(newState: Partial<T> | ((oldState: Partial<T>) => Partial<T>)): void;
}

export interface Story<T extends Object> {
  name: string;
  Component: (p: T) => any;
  options?: Options<T> | ((helpers: Helpers<T>) => Options<T>);
  radios?: (keyof T)[][];
}

export function createStory<T extends Object>({
  name,
  Component,
  options: ops = {},
  radios,
}: Story<T>) {
  const initialState: Partial<T> = {};
  let _setState: any;

  function setInternalState(fn: any) {
    _setState?.((oldState: any) => {
      const partialState = typeof fn == 'function' ? fn(oldState) : fn;
      return {...oldState, ...partialState};
    });
  }

  const options =
    typeof ops == 'function'
      ? ops({
          setState: setInternalState,
        })
      : ops;

  Object.keys(options).forEach(k => {
    const key = k as keyof T;
    initialState[key] = options[key]?.[0];
  });

  function Comp() {
    const [state, setState] = useState<Partial<T>>(initialState);
    _setState = setState;

    const stateKeys = Object.keys(state).filter(
      k => options[k as keyof T]?.length! > 1
    );
    return (
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{padding: 24, backgroundColor: 'white'}}
      >
        <Component {...(state as T)} />
        {stateKeys.length > 0 && (
          <View
            style={{marginVertical: 24, height: 1, backgroundColor: '#DDD'}}
          />
        )}
        {stateKeys.map(k => (
          <React.Fragment key={k}>
            <Text h5>{k}</Text>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 16,
                alignItems: 'center',
              }}
            >
              {options[k as keyof T]?.map((v: any, i) => (
                <Button
                  key={i}
                  style={{flex: 1, marginLeft: 4}}
                  text={
                    !v
                      ? 'No'
                      : v === true
                      ? 'Yes'
                      : typeof v == 'object'
                      ? v.toString()
                      : typeof v == 'function'
                      ? 'Function'
                      : v
                  }
                  onPress={() => {
                    const resetState: Partial<T> = {};
                    radios
                      ?.find(r => r.includes(k as keyof T))
                      ?.filter(r => r !== k)
                      .forEach(r => {
                        resetState[r] = options[r]?.[0];
                      });
                    setState({...state, [k]: v, ...resetState});
                  }}
                  secondary={state[k as keyof T] !== v}
                />
              ))}
            </View>
          </React.Fragment>
        ))}
      </ScrollView>
    );
  }
  return {component: Comp, name};
}
