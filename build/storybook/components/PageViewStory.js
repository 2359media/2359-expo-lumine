import React from 'react';
import { Image } from 'react-native';
import { PageView, Text, Button, createStyles, Scaffold } from '../..';
const data = [
    {
        title: 'Welcome!',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Welcome!',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Welcome!',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];
function PageViewStory() {
    return (<PageView data={data} renderItem={(item, i) => (<Scaffold.View>
          <Text h1 style={styles.title}>
            {item.title}
          </Text>
          <Text style={styles.desc}>{item.desc}</Text>
          <Image style={styles.image} source={0}/>
          <PageView.Footer>
            {i == data.length - 1 ? (<>
                <Button rounded text="Login" style={styles.login}/>
                <Text p2 style={styles.register}>
                  Don't have an account?{' '}
                  <Text p2 onPress={() => { }}>
                    Create One
                  </Text>
                </Text>
              </>) : undefined}
          </PageView.Footer>
        </Scaffold.View>)}/>);
}
export default {
    name: 'PageView',
    component: PageViewStory,
};
const styles = createStyles({
    title: {
        textAlign: 'center',
        marginTop: 60,
        marginBottom: 16,
    },
    desc: {
        textAlign: 'center',
    },
    image: {
        flex: 1,
        backgroundColor: '#DDD',
        marginTop: 48,
        marginBottom: 40,
    },
    login: {
        marginTop: 16,
    },
    register: {
        textAlign: 'center',
        marginTop: 24,
    },
});
