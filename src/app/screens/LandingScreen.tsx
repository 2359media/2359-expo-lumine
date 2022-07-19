import React from 'react';
import {Image, View} from 'react-native';
import {Scaffold, Text, Button, createStyles, colors, withOpacity} from '../..';
import {AutoDirectionView} from '../components/AutoDirectionView';

export function LandingScreen() {
  return (
    <Scaffold.View
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      topView={
        <Image
          style={styles.bg}
          resizeMode="cover"
          source={require('../services/res/landingBg.png')}
        />
      }
    >
      <AutoDirectionView>
        <View style={styles.section}>
          <Text h1 style={styles.title}>
            Welcome to {'\n'}2359 Mobile SDK
          </Text>
          <Text p2 style={styles.desc}>
            The fastest way to build mobile applications
          </Text>
        </View>
        <View style={styles.section}>
          <Image
            style={styles.logo}
            source={require('../services/res/logo.png')}
            resizeMode="center"
          />
          <Button
            style={{backgroundColor: colors.white}}
            rounded
            sx={{
              text: {color: colors.primary},
              pressed: {backgroundColor: withOpacity(colors.white, 0.8)},
            }}
            text="Start"
          />
        </View>
      </AutoDirectionView>
    </Scaffold.View>
  );
}

const styles = createStyles({
  container: {
    backgroundColor: colors.primary,
  },
  contentContainer: {
    paddingTop: 48,
    paddingBottom: 24,
  },
  section: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    lineHeight: 60,
    color: colors.white,
    marginBottom: 12,
  },
  desc: {
    color: colors.white,
  },
  bg: {
    position: 'absolute',
    width: undefined,
    aspectRatio: 750 / 1066,
    left: 0,
    bottom: 0,
    right: 0,
  },
  logo: {
    flex: 1,
    alignSelf: 'center',
  },
});
