import React from 'react';
import {
  FlatList,
  SectionList,
  FlatListProps,
  SectionListProps,
} from 'react-native';
import {SFAScrollView} from './SFAScrollView';
import {SFScrollView} from './SFScrollView';
import {SFView} from './SFView';
import {Props} from './shared';

function keyExtractor(item: any, i: number) {
  return `${item?.id ?? i}_${item?.updatedAt ?? ''}`;
}

function renderScrollComponent(p: Props) {
  return p.topHero ? <SFAScrollView {...p} /> : <SFScrollView {...p} />;
}

function SFFlatList<T>(props: Props & FlatListProps<T>) {
  return (
    <FlatList
      keyExtractor={keyExtractor}
      renderScrollComponent={renderScrollComponent}
      {...props}
    />
  );
}

function SFSectionList<T, S>(props: Props & SectionListProps<T, S>) {
  return (
    <SectionList
      keyExtractor={keyExtractor}
      renderScrollComponent={renderScrollComponent}
      {...props}
    />
  );
}

export const Scaffold = {
  ScrollView: renderScrollComponent,
  FlatList: SFFlatList,
  SectionList: SFSectionList,
  View: SFView,
};
