import { ViewProps } from 'react-native';
import { InputProps } from '../Input';
interface Props extends InputProps<Date>, ViewProps {
    defaultValue?: Date;
    dateFormat?: string;
    minimumDate?: Date;
    maximumDate?: Date;
    mode?: 'date' | 'time';
}
export declare function DateInput(props: Props): JSX.Element;
export {};
