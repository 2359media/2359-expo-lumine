import {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Body1, Button} from '..';

export interface Story<T extends Object> {
  name: string;
  Component: (p: T) => any;
  options?: Partial<{[key in keyof T]: any[]}>;
}

export function createStory<T extends Object>({
  name,
  Component,
  options = {},
}: Story<T>) {
  const initialState: Partial<T> = {};
  Object.keys(options).forEach(k => {
    const key = k as keyof T;
    initialState[key] = options[key]?.[0];
  });

  function Comp() {
    const [state, setState] = useState<Partial<T>>(initialState);
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
          <View
            key={k}
            style={{
              flexDirection: 'row',
              marginBottom: 16,
              alignItems: 'center',
            }}
          >
            <Body1>{k}</Body1>
            {options[k as keyof T]?.map((v, i) => (
              <Button
                key={i}
                style={{flex: 1, marginLeft: 4}}
                text={!v ? 'No' : v === true ? 'Yes' : v}
                onPress={() => setState({...state, [k]: v})}
                secondary={state[k as keyof T] !== v}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    );
  }
  return {component: Comp, name};
}
