import React, {useEffect, useRef, useState} from 'react';
import {
  Pressable,
  TextInput as RNTI,
  TextInputProps as RNTIP,
  Image,
} from 'react-native';
import r from '../../../modules/reanimated';
import {InputContainer, InputProps} from '../Input';

const hitSlop = {bottom: 8, top: 8, right: 8, left: 8};

export interface TextInputProps extends InputProps<string>, RNTIP {}

export function TextInput(props: TextInputProps) {
  const tiRef = useRef<RNTI>(null);
  const focus = r.useSharedValue(false);
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
            <Image
              source={
                secure
                  ? require('../../../icons/eyeOff.png')
                  : require('../../../icons/eye.png')
              }
            />
          </Pressable>
        )
      }
    >
      {styleProps => (
        <RNTI
          ref={tiRef}
          onChangeText={props.onValueChange}
          {...props}
          {...styleProps}
          onFocus={onFocus}
          onBlur={onBlur}
          secureTextEntry={secure}
        />
      )}
    </InputContainer>
  );
}
