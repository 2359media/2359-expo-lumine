import React from 'react';
import {PageView} from '../..';
import {createScreen} from '../services/navigation';
import {MainScreenPage1} from './MainScreen.Page1';
import {MainScreenPage2} from './MainScreen.Page2';
import {MainScreenPage3} from './MainScreen.Page3';
import {MainScreenPage4} from './MainScreen.Page4';

const data = [
  MainScreenPage1,
  MainScreenPage2,
  MainScreenPage3,
  MainScreenPage4,
];

export default createScreen('Main', () => {
  return <PageView data={data} renderItem={(Item, i) => <Item />} />;
});
