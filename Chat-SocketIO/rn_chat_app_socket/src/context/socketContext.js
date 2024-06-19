import React, { createContext, useReducer } from 'react';
import socketActions from '../actions/socketActions';
import { socketInitialState, socketReducer } from '../reducer/socketReducer';

export const GlobalSocketContext = createContext();

const SocketContext = ({ children }) => {
  const [socketState, socketDispatch] = useReducer(
    socketReducer,
    socketInitialState
  );

  return (
    <GlobalSocketContext.Provider
      value={{ socketState, socketActions, socketDispatch }}
    >
      {children}
    </GlobalSocketContext.Provider>
  );
};

export default SocketContext;
