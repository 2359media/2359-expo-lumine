import React from 'react';
import {colors} from '../../services/style';
import {MainView} from '../components/MainView';

export function MainScreenPage4() {
  return (
    <MainView
      tint="#FFFFFF"
      backgroundTint={colors.primary}
      coverImage={require('../services/res/landingBg.png')}
      topTitle="Visit Us"
      topDesc="At 2359.co or contact us to learn more"
      actionText="Contact Us"
    />
  );
}