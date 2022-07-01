import { TextInputProps as RNTIP } from 'react-native';
import { InputProps } from './InputContainer';
export interface TextInputProps extends InputProps<string>, RNTIP {
}
export declare function TextInput(props: TextInputProps): JSX.Element;
