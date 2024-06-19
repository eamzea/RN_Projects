import { AuthState } from 'context/AuthContext';

type AuthAction =
  | {
      type: 'SignIn';
    }
  | {
      type: 'ChangeFavIcon';
      payload: string;
    }
  | { type: 'LogOut' }
  | { type: 'ChangeUsername'; payload: string };

export const AuthReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'SignIn':
      return {
        ...state,
        isLogged: true,
        username: 'EAMZ',
      };
    case 'ChangeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    case 'LogOut':
      return {
        ...state,
        isLogged: false,
        username: undefined,
        favoriteIcon: undefined,
      };
    case 'ChangeUsername':
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
