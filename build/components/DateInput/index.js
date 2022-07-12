import React, { useState } from 'react';
import { Platform, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { InputContainer } from '../Input';
import { showCustomAlert } from '../Alert';
export function DateInput(props) {
    const { onValueChange, value, defaultValue, mode, minimumDate, maximumDate, children, dateFormat, ...otherProps } = props;
    const [androidPicker, setAndroidPicker] = useState();
    function showTimeModal() {
        if (!value && defaultValue) {
            onValueChange?.(defaultValue);
        }
        const pickerDate = value ?? defaultValue ?? new Date();
        if (Platform.OS == 'ios') {
            let selectedDate;
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
                children: (<DateTimePicker value={pickerDate} mode={mode} minimumDate={minimumDate} maximumDate={maximumDate} display="spinner" onChange={(_, d) => {
                        selectedDate = d;
                    }}/>),
            });
        }
        else {
            setAndroidPicker(<DateTimePicker value={pickerDate} mode="time" display="default" minimumDate={minimumDate} maximumDate={maximumDate} onChange={(_, d) => {
                    setAndroidPicker(undefined);
                    onValueChange?.(d);
                }}/>);
        }
    }
    return (<>
      <InputContainer icon={<Image source={require('../../../assets/iconCalendar20.png')}/>} {...otherProps} onPress={showTimeModal} value={value &&
            format(value, dateFormat ?? (mode == 'date' ? 'dd MMM yyyy' : 'h:mm aa'))}/>
      {androidPicker}
    </>);
}