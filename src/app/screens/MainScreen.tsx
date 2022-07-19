import React from 'react';
import {View} from 'react-native';
import {PageView} from '../..';

const data = [() => <View />];

export function MainScreen() {
  return <PageView data={data} renderItem={(Item, i) => <Item />} />;
}
