import React from 'react';
import {MainView} from '../components/MainView';

export function MainScreenPage2() {
  return (
    <MainView
      topImage={require('../services/res/mainBg2.png')}
      tint="#41A92A"
      tintD1="#41A92ADD"
      title={'Pre-defined Screens'}
      desc="Fill your content directly without layouting hassle"
      actionText="See All Screens"
    />
  );
}
