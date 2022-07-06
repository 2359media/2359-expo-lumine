import React from 'react';
import { FlatList, TouchableHighlight } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Body1 } from '..';
const componentStories = [
    require('./components/ButtonStory').default,
    require('./components/DateInputStory').default,
    require('./components/TextInputStory').default,
    require('./components/TypographyStory').default,
];
function Storybook() {
    const nav = useNavigation();
    return (<FlatList style={{ backgroundColor: 'white' }} data={componentStories} keyExtractor={item => item.name} renderItem={({ item }) => (<TouchableHighlight style={{
                borderColor: '#DDD',
                backgroundColor: 'white',
                borderBottomWidth: 1,
            }} underlayColor="#DDD" onPress={() => nav.navigate(item.name)}>
          <Body1 style={{ marginHorizontal: 16, marginVertical: 12 }}>
            {item.name}
          </Body1>
        </TouchableHighlight>)}/>);
}
const Stack = createNativeStackNavigator();
export function StorybookApp() {
    return (<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lumine Storybook" component={Storybook}/>
        {componentStories.map(s => (<Stack.Screen key={s.name} {...s}/>))}
      </Stack.Navigator>
    </NavigationContainer>);
}
