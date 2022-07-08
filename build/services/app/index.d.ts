/// <reference types="react" />
import { ViewProps } from 'react-native';
interface Props extends ViewProps {
    asyncs?: ((updateText: (t: string) => void) => Promise<any>)[];
    SplashView?: (props: {
        text?: string;
    }) => any;
}
export declare function AppProvider(props: Props): JSX.Element;
export * from './AppModal';
