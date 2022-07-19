import React from 'react';
import {View} from 'react-native';
import {MainView} from '../components/MainView';
import {updateState} from '../services/store';
import {Button, darkTheme} from '../..';

export function MainScreenPage1() {
  return (
    <MainView
      topImage={require('../services/res/mainBg1.png')}
      tint="#5AAEE1"
      title={'Comes with\nCustomisable Components'}
      desc="Style it to your liking, consistent across platforms"
      actionText="See All Components"
      topContent={
        <View>
          <Button
            onPress={() => updateState({settings: {theme: darkTheme}})}
            text="Dark"
          />
          <Button
            onPress={() => updateState({settings: {theme: undefined}})}
            text="Default"
          />
        </View>
      }
    />
  );
}
