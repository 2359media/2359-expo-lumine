import React, { useEffect, useRef, useState } from 'react';
import { Pressable, TextInput as RNTI, Image, } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { InputContainer } from '../Input';
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
    return (<InputContainer {...props} onPress={onPress} focus={focus} icon={props.secureTextEntry && (<Pressable hitSlop={hitSlop} onPress={() => setSecure(!secure)}>
            <Image source={require('../../../assets/iconEyeOn20.png')}/>
          </Pressable>)}>
      {styleProps => (<RNTI ref={tiRef} onChangeText={props.onValueChange} {...props} {...styleProps} onFocus={onFocus} onBlur={onBlur} secureTextEntry={secure}/>)}
    </InputContainer>);
}
