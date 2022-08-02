import React, { useContext, useState } from 'react';
import { Platform, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { InputContainer } from '../Input';
import { showCustomAlert } from '../Alert';
import { ThemeContext } from '../../services/style';
export function DateInput(props) {
    const { onValueChange, value, defaultValue, mode, minimumDate, maximumDate, children, dateFormat, ...otherProps } = props;
    const [androidPicker, setAndroidPicker] = useState();
    const theme = useContext(ThemeContext);
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
                children: (<DateTimePicker value={pickerDate} mode={mode} minimumDate={minimumDate} maximumDate={maximumDate} display="spinner" textColor={theme.colors.foreground} onChange={(_, d) => {
                        selectedDate = d;
                    }}/>),
            });
        }
        else {
            setAndroidPicker(<DateTimePicker value={pickerDate} mode={mode} display="default" minimumDate={minimumDate} maximumDate={maximumDate} onChange={(_, d) => {
                    setAndroidPicker(undefined);
                    onValueChange?.(d);
                }}/>);
        }
    }
    return (<>
      <InputContainer icon={<Image source={require('../../../icons/calendar.png')}/>} {...otherProps} onPress={showTimeModal} value={value &&
            format(value, dateFormat ?? (mode == 'date' ? 'dd MMM yyyy' : 'h:mm aa'))}/>
      {androidPicker}
    </>);
}
