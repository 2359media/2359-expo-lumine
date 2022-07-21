import React from 'react';
import { MainView } from '../components/MainView';
import { navigate } from '../services/navigation';
export function MainScreenPage3() {
    return (<MainView topImage={require('../services/res/mainBg3.png')} tint="#F0BA0B" tintD1="#F0BA0BDD" title={'And Many More'} desc="We research technologies to solve problems" actionText="See All Technologies" action={() => navigate('Products', { groupId: 'Technologies' })}/>);
}
