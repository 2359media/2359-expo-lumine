import React, {useRef} from 'react';
import {TextInput as RNTI, TextInputProps as RNTIP} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {InputContainer, InputProps} from './InputContainer';
import {useThemeStyles} from './styles';

export interface TextInputProps extends InputProps<string>, RNTIP {}

export function TextInput(props: TextInputProps) {
  const tiRef = useRef<RNTI>(null);
  const styles = useThemeStyles();
  const focus = useSharedValue(false);

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
      placeholder={props.placeholder ? ' ' : undefined}
    >
      <RNTI
        ref={tiRef}
        {...props}
        style={props.rounded ? styles.valueRounded : styles.value}
        placeholderTextColor={styles.placeholder.color}
        onChangeText={props.onValueChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </InputContainer>
  );
}
