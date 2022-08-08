export function emailValidator(v) {
    if (!/^[^\s@]+@[^\s@]+$/.test(v)) {
        return 'Invalid email address';
    }
    return undefined;
}
export function phoneValidator(v) {
    if (!/\d{8}$/.test(v)) {
        return 'Invalid phone number';
    }
    return undefined;
}
export function postalCodeValidator(v) {
    if (!/\d{6}$/.test(v)) {
        return 'Invalid zip code';
    }
    return undefined;
}
export function passwordValidator(v1) {
    if (v1.length < 7) {
        return 'The password must contains at least 7 alphanumeric characters';
    }
    return undefined;
}
export function confirmPasswordValidator(v1, otherInput) {
    if (v1 !== otherInput.password.value) {
        return 'Password did not match';
    }
    return undefined;
}
export function identifierValidator(v) {
    if (emailValidator(v) && phoneValidator(v)) {
        return 'Invalid email address or phone number';
    }
    return undefined;
}
