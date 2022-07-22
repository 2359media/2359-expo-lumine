import React from 'react';
import { View } from 'react-native';
import { navigate } from '../services/navigation';
import { MainView } from '../components/MainView';
import { updateState, useSelector } from '../services/store';
import { Tabs, createStyles } from '../..';
export function MainScreenPage1() {
    return (<MainView topImage={require('../../../assets/bgMain1.png')} tint="#5AAEE1" tintD1="#479ACD" title={'Comes with\nCustomisable Components'} desc="Style it to your liking, consistent across platforms" actionText="See All Components" action={() => navigate('Products', { groupId: 'Components' })} topContent={<View style={styles.topContentContainer}>
          <ThemeTabs />
          <StyleTabs />
        </View>}/>);
}
function ThemeTabs() {
    const { themeIndex } = useSelector(s => s.settings);
    return (<Tabs style={styles.row} selectedIndex={themeIndex} data={['Light', 'Dark']} onValueChange={i => updateState({ settings: { themeIndex: i } })}/>);
}
function StyleTabs() {
    const { styleIndex } = useSelector(s => s.settings);
    return (<Tabs style={styles.row} selectedIndex={styleIndex} data={['Style 1', 'Style 2']} onValueChange={i => updateState({ settings: { styleIndex: i } })}/>);
}
const styles = createStyles({
    topContentContainer: {
        paddingHorizontal: 24,
        paddingVertical: 56,
        justifyContent: 'center',
        flex: 1,
    },
    row: {
        marginBottom: 8,
    },
});
