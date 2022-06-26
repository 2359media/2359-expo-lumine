interface Font {
  name: string;
  file: any;
}

export interface Config {
  fonts?: {
    primary400?: Font;
    primary600?: Font;
    primary700?: Font;
  };
  customFonts?: {
    [key: string]: any;
  };
  colors?: {
    foreground?: string;
    background?: string;
    primary?: string;
    primaryDarker?: string;
  };
}
