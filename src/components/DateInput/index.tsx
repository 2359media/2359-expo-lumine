import React, {useContext, useState} from 'react';
import {Platform, ViewProps, Image} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {format} from 'date-fns';
import {InputContainer, InputProps} from '../Input';
import {showCustomAlert} from '../Alert';
import {ThemeContext} from '../../services/style';

interface Props extends InputProps<Date>, ViewProps {
  defaultValue?: Date;
  dateFormat?: string;
  minimumDate?: Date;
  maximumDate?: Date;
  mode?: 'date' | 'time';
}

export function DateInput(props: Props) {
  const {
    onValueChange,
    value,
    defaultValue,
    mode,
    minimumDate,
    maximumDate,
    children,
    dateFormat,
    ...otherProps
  } = props;

  const [androidPicker, setAndroidPicker] = useState<any>();
  const theme = useContext(ThemeContext);

  function showTimeModal() {
    if (!value && defaultValue) {
      onValueChange?.(defaultValue);
    }
    const pickerDate = value ?? defaultValue ?? new Date();
    if (Platform.OS == 'ios') {
      let selectedDate: Date | undefined;
      showCustomAlert({
        title: props.title ?? props.placeholder,
        buttons: [
          {
            text: 'OK',
            onPress() {
              onValueChange?.(selectedDate);
            },
          },
        ],
        children: (
          <DateTimePicker
            value={pickerDate}
            mode={mode}
            minimumDate={minimumDate}
            maximumDate={maximumDate}
            display="spinner"
            textColor={theme.colors.foreground}
            onChange={(_: any, d?: Date) => {
              selectedDate = d;
            }}
          />
        ),
      });
    } else {
      setAndroidPicker(
        <DateTimePicker
          value={pickerDate}
          mode="time"
          display="default"
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          onChange={(_: any, d?: Date) => {
            setAndroidPicker(undefined);
            onValueChange?.(d);
          }}
        />
      );
    }
  }

  return (
    <>
      <InputContainer
        icon={<Image source={require('../../../assets/iconCalendar20.png')} />}
        {...otherProps}
        onPress={showTimeModal}
        value={
          value &&
          format(
            value,
            dateFormat ?? (mode == 'date' ? 'dd MMM yyyy' : 'h:mm aa')
          )
        }
      />
      {androidPicker}
    </>
  );
}
