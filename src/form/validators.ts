export function emailValidator(v: string) {
  if (!/^[^\s@]+@[^\s@]+$/.test(v)) {
    return 'Invalid email address';
  }
  return undefined;
}

export function phoneValidator(v: string) {
  if (!/\d{8}$/.test(v)) {
    return 'Invalid phone number';
  }
  return undefined;
}

export function postalCodeValidator(v: string) {
  if (!/\d{6}$/.test(v)) {
    return 'Invalid zip code';
  }
  return undefined;
}

export function passwordValidator(v1: string) {
  if (v1.length < 7) {
    return 'The password must contains at least 7 alphanumeric characters';
  }
  return undefined;
}

export function confirmPasswordValidator(v1: string, otherInput: any) {
  if (v1 !== otherInput.password.value) {
    return 'Password did not match';
  }
  return undefined;
}

export function identifierValidator(v: string) {
  if (emailValidator(v) && phoneValidator(v)) {
    return 'Invalid email address or phone number';
  }
  return undefined;
}
