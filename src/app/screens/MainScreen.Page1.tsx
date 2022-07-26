import React from 'react';
import {navigate} from '../services/navigation';
import {MainView} from '../components/MainView';

export function MainScreenPage1() {
  return (
    <MainView
      topImage={require('../../../assets/bgMain1.png')}
      tint="#5AAEE1"
      tintD1="#479ACD"
      title={'Comes with\nCustomisable Components'}
      desc="Style it to your liking, consistent across platforms"
      actionText="See Demo"
      action={() => navigate('Products', {groupId: 'Components'})}
    />
  );
}
