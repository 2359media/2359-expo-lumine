import React from 'react';
import { FlatList, TouchableHighlight } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Body1 } from '..';
const componentStories = [
    require('./components/ButtonStory').default,
    require('./components/TextInputStory').default,
    require('./components/TypographyStory').default,
];
function Storybook() {
    const nav = useNavigation();
    return (React.createElement(FlatList, { style: { backgroundColor: 'white' }, data: componentStories, keyExtractor: item => item.name, renderItem: ({ item }) => (React.createElement(TouchableHighlight, { style: {
                borderColor: '#DDD',
                backgroundColor: 'white',
                borderBottomWidth: 1,
            }, underlayColor: "#DDD", onPress: () => nav.navigate(item.name) },
            React.createElement(Body1, { style: { marginHorizontal: 16, marginVertical: 12 } }, item.name))) }));
}
const Stack = createNativeStackNavigator();
export function StorybookApp() {
    return (React.createElement(NavigationContainer, null,
        React.createElement(Stack.Navigator, null,
            React.createElement(Stack.Screen, { name: "Lumine Storybook", component: Storybook }),
            componentStories.map(s => (React.createElement(Stack.Screen, { key: s.name, ...s }))))));
}
