import { Image, Pressable } from 'react-native';
import { createThemeStyles } from '../../services/style';
import { Text } from '../Text';
export function ListItem(props) {
    const { style, styles, title, onPress, rounded, isFirst, isLast, type = 'default', children, } = useThemeStyle('ListItem', props);
    function getStyle(key, ...rest) {
        const s = styles;
        return [
            s[key],
            isLast && s[key + 'Last'],
            isFirst && s[key + 'First'],
            rounded && s[key + 'Rounded'],
            rounded && isFirst && s[key + 'RoundedFirst'],
            rounded && isLast && s[key + 'RoundedLast'],
            type != 'default' && s[key + 'Action'],
            type == 'destructive' && s[key + 'Destructive'],
            type == 'cancel' && s[key + 'Cancel'],
            ...rest,
        ].filter(s => s);
    }
    return (<Pressable onPress={onPress} disabled={!onPress} style={s => getStyle('container', style, s.pressed && styles.underlay)}>
      {title && <Text style={getStyle('text')}>{title}</Text>}
      {onPress && type == 'default' && (<Image style={styles.image} source={require('../../../icons/caret2Right.png')}/>)}
      {children}
    </Pressable>);
}
const useThemeStyle = createThemeStyles(({ colors, fonts }) => ({
    container: {
        marginHorizontal: -24,
        paddingVertical: 12,
        paddingLeft: 24,
        paddingRight: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: colors.backgroundD2,
        overflow: 'hidden',
    },
    containerLast: {
        borderBottomWidth: 0,
        marginBottom: 24,
    },
    containerRounded: {
        paddingLeft: 16,
        paddingRight: 8,
        marginHorizontal: 0,
        backgroundColor: colors.backgroundD1,
    },
    containerRoundedFirst: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    containerRoundedLast: {
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    underlay: {
        backgroundColor: colors.backgroundD2,
    },
    image: {
        tintColor: colors.foreground,
    },
    text: {
        flex: 1,
    },
    textAction: {
        textAlign: 'center',
        color: colors.primary,
    },
    textCancel: {
        fontFamily: fonts.primary700,
    },
    textDestructive: {
        color: colors.danger,
    },
}));
