export declare const useThemeStyles: <P>(name?: string | undefined, props?: P | undefined) => P extends object ? P & {
    styles: {
        container: {
            marginBottom: number;
        };
        border: {
            paddingHorizontal: number;
            flexDirection: "row";
            alignItems: "center";
        };
        borderLine: {
            paddingTop: number;
            paddingBottom: number;
            borderBottomWidth: number;
            borderColor: string;
        };
        borderRounded: {
            paddingTop: number;
            paddingBottom: number;
            paddingRight: number;
            borderRadius: number;
            borderColor: string;
            borderWidth: number;
        };
        borderDisabled: {
            backgroundColor: string;
        };
        title: {
            position: "absolute";
            left: number;
            right: number;
            fontFamily: string | undefined;
            color: string;
        };
        value: {
            flex: number;
            marginLeft: number;
            marginRight: number;
            paddingTop: number;
            paddingBottom: number;
            fontFamily: string | undefined;
            color: string;
        };
        valueLine: {
            fontSize: number;
            lineHeight: number;
            minHeight: number;
        };
        valueRounded: {
            top: number;
            fontSize: number;
            lineHeight: number;
            minHeight: number;
        };
        valueRoundedHasTitle: {
            top: number;
        };
        valueEmpty: {
            color: string;
        };
        error: {
            marginVertical: number;
            marginHorizontal: number;
            fontFamily: string | undefined;
            fontSize: number;
            color: string;
        };
    };
} : {
    container: {
        marginBottom: number;
    };
    border: {
        paddingHorizontal: number;
        flexDirection: "row";
        alignItems: "center";
    };
    borderLine: {
        paddingTop: number;
        paddingBottom: number;
        borderBottomWidth: number;
        borderColor: string;
    };
    borderRounded: {
        paddingTop: number;
        paddingBottom: number;
        paddingRight: number;
        borderRadius: number;
        borderColor: string;
        borderWidth: number;
    };
    borderDisabled: {
        backgroundColor: string;
    };
    title: {
        position: "absolute";
        left: number;
        right: number;
        fontFamily: string | undefined;
        color: string;
    };
    value: {
        flex: number;
        marginLeft: number;
        marginRight: number;
        paddingTop: number;
        paddingBottom: number;
        fontFamily: string | undefined;
        color: string;
    };
    valueLine: {
        fontSize: number;
        lineHeight: number;
        minHeight: number;
    };
    valueRounded: {
        top: number;
        fontSize: number;
        lineHeight: number;
        minHeight: number;
    };
    valueRoundedHasTitle: {
        top: number;
    };
    valueEmpty: {
        color: string;
    };
    error: {
        marginVertical: number;
        marginHorizontal: number;
        fontFamily: string | undefined;
        fontSize: number;
        color: string;
    };
};
