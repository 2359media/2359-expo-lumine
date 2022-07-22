import React from 'react';
import { colors } from '../../services/style';
import { MainView } from '../components/MainView';
export function MainScreenPage4() {
    return (<MainView tint="#FFF" tintD1="#FFFD" backgroundTint={colors.primary} coverImage={require('../../../assets/bgLanding.png')} topTitle="Visit Us" topDesc="At 2359.co or contact us to learn more" actionText="Contact Us"/>);
}
