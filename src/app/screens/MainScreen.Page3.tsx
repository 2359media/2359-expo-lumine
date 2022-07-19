import React from 'react';
import {MainView} from '../components/MainView';

export function MainScreenPage3() {
  return (
    <MainView
      topImage={require('../services/res/mainBg3.png')}
      tint="#F0BA0B"
      title={'And Many More'}
      desc="We research technologies to solve problems"
      actionText="See All Technologies"
    />
  );
}
