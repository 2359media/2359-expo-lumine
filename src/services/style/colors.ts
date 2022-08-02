export const colors = {
  transparent: 'transparent',
  /** #FFFFFF */ background: '#FFFFFF',
  /** #F8F8F8 */ backgroundD1: '#F8F8F8',
  /** #C2C9D1 */ backgroundD2: '#D0D0D0',
  /** #AAAAAA */ backgroundD3: '#AAAAAA',
  /** #000000 */ foreground: '#000000',
  /** #2D2D2D */ foregroundL1: '#2D2D2D',
  /** #4D4D4D */ foregroundL2: '#4D4D4D',
  /** #757575 */ foregroundL3: '#757575',
  /** #804191 */ primary: '#804191',
  /** #5F0B76 */ primaryD1: '#5F0B76',
  /** #804191 */ secondary: '#804191',
  /** #FF0000 */ danger: '#E4100E',
  /** #000000 */ warning: '#000000',
  /** #000000 */ info: '#000000',
  /** #D0D0D0 */ disabled: '#D0D0D0',
  /** #AAAAAA */ disabledD1: '#AAAAAA',
  /** #000000 */ black: '#000000',
  /** #FFFFFF */ white: '#FFFFFF',
  /** #F8F8F8 */ greyL4: '#F8F8F8',
  /** #C2C9D1 */ greyL3: '#D0D0D0',
  /** #AAAAAA */ greyL2: '#AAAAAA',
  /** #757575 */ greyL1: '#757575',
  /** #4D4D4D */ grey: '#4D4D4D',
  /** #2D2D2D */ greyD1: '#2D2D2D',

  // for react navigation
  /** #000000 */ text: '#000000',
  /** #000000 */ card: '#FFFFFF',
  /** #2D2D2D */ border: '#F8F8F8',
  /** #E4100E */ notification: '#E4100E',
};

export function withOpacity(color: string, opacity: number): string {
  const opacityHex = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, '0');
  return color + opacityHex;
}

export function lightenDarkenColor(col: string, amt: number) {
  if (col[0] !== '#') {
    return col;
  }

  function norm(x: number) {
    const y = Math.max(Math.min(x + amt, 255), 0);
    return y.toString(16).padStart(2, '0');
  }

  col = col.slice(1);
  const num = parseInt(col, 16);
  const r = norm(num >> 16);
  const g = norm((num >> 8) & 0x00ff);
  const b = norm(num & 0x0000ff);

  return '#' + r + g + b;
}
