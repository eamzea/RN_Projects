import types from '../types/types';

export const socketInitialState = {
  action: '',
  data: '',
  connected: false,
  username: null,
  messages: [],
  onlineUsers: [],
};

export const socketReducer = (state = socketInitialState, action) => {
  console.log(action, 'REDUCER');
  switch (action.type) {
    case types.SocketConnect:
      return { ...state, ...action.payload };
    case types.SocketLogin:
      return { ...state, ...action.payload };
    case types.SocketLogout:
      return { ...state, ...action.payload };
    case types.SocketMessageRecover:
      return { ...state, ...action.payload };
    case types.SocketMessageSend:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
