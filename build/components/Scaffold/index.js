import React from 'react';
import { FlatList, SectionList, } from 'react-native';
import { SFAScrollView } from './SFAScrollView';
import { SFScrollView } from './SFScrollView';
import { SFView } from './SFView';
function keyExtractor(item, i) {
    return `${item?.id ?? i}_${item?.updatedAt ?? ''}`;
}
function renderScrollComponent(p) {
    return p.topHero ? <SFAScrollView {...p}/> : <SFScrollView {...p}/>;
}
function SFFlatList(props) {
    return (<FlatList keyExtractor={keyExtractor} renderScrollComponent={renderScrollComponent} {...props}/>);
}
function SFSectionList(props) {
    return (<SectionList keyExtractor={keyExtractor} renderScrollComponent={renderScrollComponent} {...props}/>);
}
export const Scaffold = {
    ScrollView: renderScrollComponent,
    FlatList: SFFlatList,
    SectionList: SFSectionList,
    View: SFView,
};
