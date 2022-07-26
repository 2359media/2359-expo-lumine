import React from 'react';
import { View } from 'react-native';
import { createThemeStyles } from '../../services/style';
import { Button } from '../Button';
export function Tabs(props) {
    const styles = useThemeStyles();
    return (<View style={[styles.container, props.style]}>
      {props.data?.map((d, i) => (<Button key={i} text={d} sx={{
                text: styles.text(props.selectedIndex == i),
                pressed: styles.itemPressed,
            }} style={styles.item(props.selectedIndex == i)} onPress={() => props.onValueChange?.(i)}/>))}
    </View>);
}
const useThemeStyles = createThemeStyles(({ colors }) => ({
    container: {
        flexDirection: 'row',
        marginHorizontal: -2,
    },
    item: (selected) => ({
        flex: 1,
        marginHorizontal: 2,
        minHeight: 36,
        backgroundColor: selected ? colors.primary : colors.background,
        paddingHorizontal: 4,
    }),
    text: (selected) => ({
        fontSize: 14,
        color: selected ? colors.background : colors.foreground,
    }),
    itemPressed: {
        opacity: 0.8,
    },
}));
