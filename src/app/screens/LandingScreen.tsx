import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {colors} from '../../services/style';
import {MainView} from '../components/MainView';

export function LandingScreen() {
  const nav = useNavigation();
  return (
    <MainView
      tint="#FFFFFF"
      backgroundTint={colors.primary}
      coverImage={require('../services/res/landingBg.png')}
      logoImage={require('../services/res/logo.png')}
      topTitle={'Welcome to\n2359 Mobile SDK'}
      topDesc="The fastest way to build mobile applications"
      actionText="Start"
      action={() => nav.navigate('main' as any)}
    />
  );
}
