import React from 'react';
import {navigate, createScreen} from '../services/navigation';
import {colors} from '../../services/style';
import {MainView} from '../components/MainView';

export default createScreen('Landing', () => {
  return (
    <MainView
      tint="#FFF"
      tintD1="#FFFD"
      backgroundTint={colors.primary}
      coverImage={require('../../../assets/bgLanding.png')}
      logoImage={require('../../../assets/logo2359.png')}
      topTitle={'Welcome to\n2359 Mobile SDK'}
      topDesc="The fastest way to build mobile applications"
      actionText="Start"
      action={() => navigate('Main')}
    />
  );
});
