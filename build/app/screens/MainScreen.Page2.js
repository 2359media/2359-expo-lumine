import React from 'react';
import { MainView } from '../components/MainView';
import { navigate } from '../services/navigation';
export function MainScreenPage2() {
    return (<MainView topImage={require('../../../assets/bgMain2.png')} tint="#41A92A" tintD1="#41A92ADD" title={'Pre-defined Screens'} desc="Fill your content directly without layouting hassle" actionText="See All Screens" action={() => navigate('Products', { groupId: 'Screens' })}/>);
}
