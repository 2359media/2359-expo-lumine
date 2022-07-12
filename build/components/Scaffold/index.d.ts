/// <reference types="react" />
import { FlatListProps, SectionListProps } from 'react-native';
import { SFView } from './SFView';
import { Props } from './shared';
declare function renderScrollComponent(p: Props): JSX.Element;
declare function SFFlatList<T>(props: Props & FlatListProps<T>): JSX.Element;
declare function SFSectionList<T, S>(props: Props & SectionListProps<T, S>): JSX.Element;
export declare const Scaffold: {
    ScrollView: typeof renderScrollComponent;
    FlatList: typeof SFFlatList;
    SectionList: typeof SFSectionList;
    View: typeof SFView;
};
export {};
