import React, {useEffect, useRef, useState} from 'react';
import {
  Pressable,
  TextInput as RNTI,
  TextInputProps as RNTIP,
  Image,
} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {InputContainer, InputProps} from './InputContainer';

const hitSlop = {bottom: 8, top: 8, right: 8, left: 8};

export interface TextInputProps extends InputProps<string>, RNTIP {}

export function TextInput(props: TextInputProps) {
  const tiRef = useRef<RNTI>(null);
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

  return (
    <InputContainer
      {...props}
      onPress={onPress}
      focus={focus}
      icon={
        props.secureTextEntry && (
          <Pressable hitSlop={hitSlop} onPress={() => setSecure(!secure)}>
            <Image source={require('../../services/res/icons/eyeOn.png')} />
          </Pressable>
        )
      }
    >
      {styleProps => (
        <RNTI
          ref={tiRef}
          {...props}
          {...styleProps}
          onChangeText={props.onValueChange}
          onFocus={onFocus}
          onBlur={onBlur}
          secureTextEntry={secure}
        />
      )}
    </InputContainer>
  );
}
