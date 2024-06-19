import { ThemeActions, ThemeTypes } from 'interfaces';

const setDarkTheme = (): ThemeTypes => {
  return {
    type: 'set_dark_theme',
    payload: {
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
    },
  };
};

const setLightTheme = (): ThemeTypes => {
  return {
    type: 'set_light_theme',
    payload: {
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
    },
  };
};

export const themeActions: ThemeActions = {
  setDarkTheme,
  setLightTheme,
};
