export declare function emailValidator(v: string): "Invalid email address" | undefined;
export declare function phoneValidator(v: string): "Invalid phone number" | undefined;
export declare function postalCodeValidator(v: string): "Invalid zip code" | undefined;
export declare function passwordValidator(v1: string): "The password must contains at least 7 alphanumeric characters" | undefined;
export declare function confirmPasswordValidator(v1: string, otherInput: any): "Password did not match" | undefined;
export declare function identifierValidator(v: string): "Invalid email address or phone number" | undefined;
