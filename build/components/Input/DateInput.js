import React from 'react';
import { format } from 'date-fns';
import { InputContainer } from './InputContainer';
export function DateInput(props) {
    const { value, dateFormat, children, onValueChange, ...otherProps } = props;
    function onPress() { }
    return (React.createElement(InputContainer, { icon: require('../../services/res/icons/calendar.png'), ...otherProps, onPress: onPress, value: value && format(value, dateFormat ?? 'dd MMM yyyy') }));
}
