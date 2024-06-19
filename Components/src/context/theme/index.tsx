import React, { createContext, useEffect, useReducer } from 'react';
import {
  themeInitialDarkState,
  themeInitialLightState,
  themeReducer,
} from 'reducer/theme';
import { themeActions } from 'actions/theme';
import { ThemeActions, ThemeState } from 'interfaces';
import { useColorScheme } from 'react-native';

interface ThemeContextProps {
  theme: ThemeState;
  themeDispatch: any;
  themeActions: ThemeActions;
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ThemeContext = createContext({} as ThemeContextProps);

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const colorScheme = useColorScheme();
  const [theme, themeDispatch] = useReducer(
    themeReducer,
    colorScheme === 'dark' ? themeInitialDarkState : themeInitialLightState,
  );

  useEffect(() => {
    colorScheme === 'dark'
      ? themeDispatch(themeActions.setDarkTheme())
      : themeDispatch(themeActions.setLightTheme());
  }, [colorScheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeDispatch,
        themeActions,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
