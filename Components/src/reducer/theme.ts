import { ThemeState, ThemeTypes } from 'interfaces';

export const themeInitialLightState: ThemeState = {
  currentTheme: 'light',
  dividerColor: '#0D3C59',
  dark: false,
  colors: {
    primary: '#0D3C59',
    background: '#ffffff',
    card: '#f71735',
    text: '#0A0A0A',
    border: '#051824',
    notification: '#de541e',
  },
};

export const themeInitialDarkState: ThemeState = {
  currentTheme: 'dark',
  dividerColor: '#9dd1f1',
  dark: true,
  colors: {
    primary: '#9dd1f1',
    background: '#000000',
    card: '#f71735',
    text: '#EBEBEB',
    border: '#A5D5F3',
    notification: '#de541e',
  },
};

export const themeReducer = (state: ThemeState, action: ThemeTypes) => {
  switch (action.type) {
    case 'set_light_theme':
      return { ...state, ...action.payload };
    case 'set_dark_theme':
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
