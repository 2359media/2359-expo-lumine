import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Body1, Button } from '..';
export function createStory({ name, Component, options = {}, }) {
    const initialState = {};
    Object.keys(options).forEach(k => {
        const key = k;
        initialState[key] = options[key]?.[0];
    });
    function Comp() {
        const [state, setState] = useState(initialState);
        const stateKeys = Object.keys(state).filter(k => options[k]?.length > 1);
        return (React.createElement(ScrollView, { style: { flex: 1 }, contentContainerStyle: { padding: 24, backgroundColor: 'white' } },
            React.createElement(Component, { ...state }),
            stateKeys.length > 0 && (React.createElement(View, { style: { marginVertical: 24, height: 1, backgroundColor: '#DDD' } })),
            stateKeys.map(k => (React.createElement(View, { key: k, style: {
                    flexDirection: 'row',
                    marginBottom: 16,
                    alignItems: 'center',
                } },
                React.createElement(Body1, null, k),
                options[k]?.map((v, i) => (React.createElement(Button, { key: i, style: { flex: 1, marginLeft: 4 }, text: !v ? 'No' : v === true ? 'Yes' : v, onPress: () => setState({ ...state, [k]: v }), secondary: state[k] !== v }))))))));
    }
    return { component: Comp, name };
}
