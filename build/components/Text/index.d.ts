/// <reference types="react" />
import { TextProps as RNTP } from 'react-native';
interface Props extends RNTP {
    /** 24pt */ h1?: boolean;
    /** 20pt */ h2?: boolean;
    /** 18pt */ h3?: boolean;
    /** 16pt */ h4?: boolean;
    /** 14pt */ h5?: boolean;
    /** 16pt */ p1?: boolean;
    /** 14pt */ p2?: boolean;
    /** 12pt */ p3?: boolean;
    /** 12pt */ p4?: boolean;
    /** 10pt */ f1?: boolean;
}
export declare function Text(props: Props): JSX.Element;
export {};
