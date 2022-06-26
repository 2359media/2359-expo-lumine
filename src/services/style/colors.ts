export const colors = {
  transparent: 'transparent',
  background: '#FFFFFF',
  foreground: '#000000',
  primary: '#804191',
  primaryD1: '#5F0B76',
  secondary: '#804191',
  danger: '#FF0000',
  warning: '#000000',
  info: '#000000',
  disabled: '#D0D0D0',
  disabledD1: '#AAAAAA',
  black: '#000000',
  white: '#FFFFFF',
};

export function withOpacity(color: string, opacity: number): string {
  const opacityHex = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, '0');
  return color + opacityHex;
}
