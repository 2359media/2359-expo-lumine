import { ViewProps } from 'react-native';
import { InputProps } from './InputContainer';
export interface DateInputProps extends InputProps<Date>, ViewProps {
    dateFormat?: string;
}
export declare function DateInput(props: DateInputProps): JSX.Element;
