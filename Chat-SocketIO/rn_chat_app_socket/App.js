import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import { io } from 'socket.io-client';
import AppContainer from './AppContainer';

const socket = io('https://2e7617aa4ea4.ngrok.io');
const socketMiddleware = createSocketIoMiddleware(socket, 'server/');

const reducer = (state = { conversations: {} }, action) => {
  switch (action.type) {
    case 'users_online':
      const conversations = { ...state.conversations };
      const usersOnline = action.data;
      for (let i = 0; i < usersOnline.length; i++) {
        const userID = usersOnline[i].userID;
        if (conversations[userID] === undefined) {
          conversations[userID] = {
            messages: [],
            username: usersOnline[i].username,
          };
        }
      }
      return { ...state, usersOnline, conversations };
    case 'private_message':
      const { conversationID } = action.data;

      return {
        ...state,
        conversations: {
          ...state.conversations,
          [conversationID]: {
            ...state.conversations[conversationID],
            messages: [
              action.data.message,
              ...state.conversations[conversationID].messages,
            ],
          },
        },
      };
    case 'self_user':
      return { ...state, selfUser: action.data };
    default:
      return state;
  }
};

let store = applyMiddleware(socketMiddleware)(createStore)(reducer);

store.subscribe(() => {});

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
