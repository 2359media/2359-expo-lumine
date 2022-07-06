import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { H5, Button } from '..';
export function createStory({ name, Component, options: ops = {}, radios, }) {
    const initialState = {};
    let _setState;
    function setInternalState(fn) {
        _setState?.((oldState) => {
            const partialState = typeof fn == 'function' ? fn(oldState) : fn;
            return { ...oldState, ...partialState };
        });
    }
    const options = typeof ops == 'function'
        ? ops({
            setState: setInternalState,
        })
        : ops;
    Object.keys(options).forEach(k => {
        const key = k;
        initialState[key] = options[key]?.[0];
    });
    function Comp() {
        const [state, setState] = useState(initialState);
        _setState = setState;
        const stateKeys = Object.keys(state).filter(k => options[k]?.length > 1);
        return (<ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 24, backgroundColor: 'white' }}>
        <Component {...state}/>
        {stateKeys.length > 0 && (<View style={{ marginVertical: 24, height: 1, backgroundColor: '#DDD' }}/>)}
        {stateKeys.map(k => (<React.Fragment key={k}>
            <H5>{k}</H5>
            <View style={{
                    flexDirection: 'row',
                    marginBottom: 16,
                    alignItems: 'center',
                }}>
              {options[k]?.map((v, i) => (<Button key={i} style={{ flex: 1, marginLeft: 4 }} text={!v
                        ? 'No'
                        : v === true
                            ? 'Yes'
                            : typeof v == 'object'
                                ? v.toString()
                                : v} onPress={() => {
                        const resetState = {};
                        radios
                            ?.find(r => r.includes(k))
                            ?.filter(r => r !== k)
                            .forEach(r => {
                            resetState[r] = options[r]?.[0];
                        });
                        setState({ ...state, [k]: v, ...resetState });
                    }} secondary={state[k] !== v}/>))}
            </View>
          </React.Fragment>))}
      </ScrollView>);
    }
    return { component: Comp, name };
}
