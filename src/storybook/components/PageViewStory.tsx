import React from 'react';
import {Image} from 'react-native';
import {PageView, Text, Button, createStyles, Scaffold} from '../..';

function PageViewStory() {
  return (
    <PageView>
      <Scaffold.View>
        <Text h1 style={styles.title}>
          Welcome!
        </Text>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Image style={styles.image} source={0} />
        <PageView.IndicatorFrame />
      </Scaffold.View>
      <Scaffold.View>
        <Text h1 style={styles.title}>
          Welcome!
        </Text>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Image style={styles.image} source={0} />
        <PageView.IndicatorFrame />
      </Scaffold.View>
      <Scaffold.View>
        <Text h1 style={styles.title}>
          Welcome!
        </Text>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Image style={styles.image} source={0} />
        <PageView.IndicatorFrame />
        <Button rounded text="Login" style={styles.login} />
        <Text p2 style={styles.register}>
          Don't have an account?{' '}
          <Text p2 onPress={() => {}}>
            Create One
          </Text>
        </Text>
      </Scaffold.View>
    </PageView>
  );
}

export default {
  name: 'PageView',
  component: PageViewStory,
};

const styles = createStyles({
  title: {
    textAlign: 'center',
    marginVertical: 16,
  },
  desc: {
    textAlign: 'center',
  },
  image: {
    flex: 1,
    backgroundColor: '#DDD',
    marginTop: 48,
    marginBottom: 16,
  },
  login: {
    marginTop: 16,
  },
  register: {
    textAlign: 'center',
    marginTop: 24,
  },
});
