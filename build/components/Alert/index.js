import React from 'react';
import { Text, View } from 'react-native';
import { showModal } from '../../services/app';
import { createThemeStyles } from '../../services/style';
import { Button } from '../Button';
const defaultButtons = [{ text: 'Dismiss' }];
export function showAlert(title, message, buttons) {
    showCustomAlert({ title, message, buttons });
}
export function showCustomAlert(props) {
    showModal(d => <Alert {...props} dismiss={d}/>, { position: 'center' });
}
function Alert(props) {
    const { title, message, children, dismiss, buttons, styles } = useThemeStyles('Alert', props);
    return (<View style={styles.container}>
      {!!title && <Text style={styles.title}>{title}</Text>}
      {!!message && <Text style={styles.message}>{message}</Text>}
      {typeof children == 'function' ? children(dismiss) : children}
      <View style={styles.buttonContainer}>
        {(buttons ?? defaultButtons).map((b, i) => (<Button key={i} style={styles.button} text={b.text} secondary={b.style == 'cancel'} danger={b.style == 'destructive'} onPress={() => {
                dismiss();
                b.onPress && b.onPress();
            }}/>))}
      </View>
    </View>);
}
const useThemeStyles = createThemeStyles(({ colors, fonts }) => ({
    container: {
        alignSelf: 'center',
        width: 320,
        padding: 16,
        backgroundColor: colors.background,
        borderRadius: 16,
    },
    title: {
        fontFamily: fonts.primary600,
        fontSize: 20,
        textAlign: 'center',
        color: colors.foreground,
    },
    message: {
        marginTop: 16,
        fontFamily: fonts.primary400,
        fontSize: 16,
        textAlign: 'center',
        color: colors.foreground,
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: 'row',
        marginHorizontal: -4,
    },
    button: {
        flex: 1,
        marginHorizontal: 4,
    },
}));
