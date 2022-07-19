import React from 'react';
import {MainView} from '../components/MainView';

export function MainScreenPage1() {
  return (
    <MainView
      topImage={require('../services/res/mainBg1.png')}
      tint="#5AAEE1"
      title={'Comes with\nCustomisable Components'}
      desc="Style it to your liking, consistent across platforms"
      actionText="See All Components"
    />
  );
}
