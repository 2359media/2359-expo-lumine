import React, { useEffect, useRef, useState } from 'react';
import { Pressable, TextInput as RNTI, Image, } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { InputContainer } from './InputContainer';
const hitSlop = { bottom: 8, top: 8, right: 8, left: 8 };
export function TextInput(props) {
    const tiRef = useRef(null);
    const focus = useSharedValue(false);
    const [secure, setSecure] = useState(props.secureTextEntry);
    useEffect(() => {
        setSecure(props.secureTextEntry);
    }, [props.secureTextEntry]);
    function onPress() {
        tiRef.current?.focus();
    }
    function onFocus() {
        focus.value = true;
    }
    function onBlur() {
        focus.value = false;
    }
    return (React.createElement(InputContainer, { ...props, onPress: onPress, focus: focus, icon: props.secureTextEntry && (React.createElement(Pressable, { hitSlop: hitSlop, onPress: () => setSecure(!secure) },
            React.createElement(Image, { source: require('../../services/res/icons/eyeOn.png') }))) }, styleProps => (React.createElement(RNTI, { ref: tiRef, ...props, ...styleProps, onChangeText: props.onValueChange, onFocus: onFocus, onBlur: onBlur, secureTextEntry: secure }))));
}
