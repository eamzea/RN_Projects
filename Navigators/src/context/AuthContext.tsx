import React from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import { AuthReducer } from 'reducer/AuthReducer';

export interface AuthState {
  isLogged: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const initialAuthState: AuthState = {
  isLogged: false,
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFavIcon: (iconName: string) => void;
  logOut: () => void;
  changeUsername: (username: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [authState, dispatch] = useReducer(AuthReducer, initialAuthState);

  const signIn = () => {
    dispatch({ type: 'SignIn' });
  };

  const changeFavIcon = (iconName: string) => {
    dispatch({ type: 'ChangeFavIcon', payload: iconName });
  };

  const logOut = () => {
    dispatch({ type: 'LogOut' });
  };

  const changeUsername = (username: string) => {
    dispatch({ type: 'ChangeUsername', payload: username });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavIcon,
        logOut,
        changeUsername,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
