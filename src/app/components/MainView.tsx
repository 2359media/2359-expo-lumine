import React from 'react';
import {View, Image} from 'react-native';
import {Scaffold, Text, PageView, Button, createStyles, colors} from '../..';
import {AutoDirectionView} from '../components/AutoDirectionView';

interface MainViewProps {
  topImage?: any;
  topTitle?: string;
  topDesc?: string;
  topContent?: any;
  title?: string;
  desc?: string;
  tint?: string;
  backgroundTint?: string;
  actionText?: string;
  coverImage?: any;
  logoImage?: any;
  action?(): void;
}

export function MainView(props: MainViewProps) {
  return (
    <Scaffold.View
      style={styles.container(props.backgroundTint)}
      contentContainerStyle={styles.contentContainer}
      topView={
        props.coverImage && (
          <Image
            style={styles.coverImage}
            resizeMode="stretch"
            source={props.coverImage}
          />
        )
      }
    >
      <AutoDirectionView>
        <View style={styles.section}>
          {props.topImage && (
            <Image
              style={styles.topImage}
              resizeMode="cover"
              source={props.topImage}
            />
          )}
          {props.topTitle && (
            <Text h1 style={styles.topTitle}>
              {props.topTitle}
            </Text>
          )}
          {props.topDesc && (
            <Text p2 style={styles.topDesc}>
              {props.topDesc}
            </Text>
          )}
          {props.topContent}
        </View>
        <View style={styles.section}>
          <View style={styles.titleContainer}>
            {props.logoImage && (
              <Image
                style={styles.logo}
                source={props.logoImage}
                resizeMode="center"
              />
            )}
            {props.title && (
              <Text h1 style={styles.title}>
                {props.title}
              </Text>
            )}
            {props.desc && (
              <Text p2 style={styles.desc}>
                {props.desc}
              </Text>
            )}
          </View>
          <PageView.Footer>
            <Button
              style={styles.button(props.tint)}
              rounded
              sx={{
                text: styles.buttonText(props.backgroundTint),
                pressed: styles.buttonPressed,
              }}
              text={props.actionText}
              onPress={props.action}
            />
          </PageView.Footer>
        </View>
      </AutoDirectionView>
    </Scaffold.View>
  );
}

const styles = createStyles({
  container: (tint?: string) => (tint ? {backgroundColor: tint} : {}),
  contentContainer: {
    paddingTop: 48,
    paddingBottom: 24,
  },
  coverImage: {
    position: 'absolute',
    width: undefined,
    aspectRatio: 750 / 1066,
    left: 0,
    bottom: 0,
    right: 0,
  },
  topImage: {
    position: 'absolute',
    width: undefined,
    height: undefined,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'visible',
  },
  topTitle: {
    fontSize: 40,
    lineHeight: 60,
    color: colors.white,
    marginBottom: 12,
  },
  topDesc: {
    color: colors.white,
  },
  section: {
    flex: 1,
    marginHorizontal: -24,
    paddingHorizontal: 24,
  },
  titleContainer: {
    flex: 1,
    marginTop: 36,
  },
  title: {
    textAlign: 'center',
    marginBottom: 16,
  },
  desc: {
    textAlign: 'center',
  },
  logo: {
    flex: 1,
    alignSelf: 'center',
  },
  button: (tint?: string) => ({
    backgroundColor: tint,
    marginTop: 12,
  }),
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: (tint?: string) => (tint ? {color: tint} : {}),
});
