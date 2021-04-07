/*
  Styleguide: https://app.zeplin.io/project/5e70cb33c2788c153b9ac08c/styleguide 
  Color palette: https://app.zeplin.io/project/5e70cb33c2788c153b9ac08c/screen/5d31721d529142517c519b17
*/
export const ColorPalette = {
  white: '#ffffff',
  black: '#000000',
  primary: {
    default: '#d74b4b',
    dark: '#b62c2c',
    light: '#eba5a5',
  },
  secondary: {
    default: '#596d97',
    dark: '#3f5072',
    light: '#b4c1dc',
  },
  info: { // Why not gray ?
    default: '#bebebe',
    dark: '#909090',
    light: '#e0e0e0',
  },
  success: {
    default: '#318d4e',
    dark: '#318d4e',
    light: '#b9e6c7',
  },
  warning: {
    default: '#ffd076',
    dark: '#ffb019',
    light: '#ffebc3',
  },
  danger: {
    default: '#f36c44',
    dark: '#da4f25',
    light: '#feb39d',
  },
};

export const ThemeMetrics = {
  
};

export const RNETheme = {
  Button: {
    buttonStyle: {
      backgroundColor: ColorPalette.primary.dark,
    }
  }
};
