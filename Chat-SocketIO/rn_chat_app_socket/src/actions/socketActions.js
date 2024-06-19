import { io } from 'socket.io-client';
import types from '../types/types';

let socket;

const connect = ({ action, data }) => {
  socket = io(data);

  return {
    type: types.SocketConnect,
    payload: {
      action,
      data,
      connected: true,
    },
  };
};

const recoverMsgs = ({ action }) => {
  return socket.on(action, message => {
    return {
      type: types.SocketMessageRecover,
      payload: {
        action,
        messages: message,
      },
    };
  });
};

const login = async ({ action, data }) => {
  socket.emit(action, data);

  let socketResponse = [];

  socket.on('GET_ONLINE_USERS', ({ data: socketData }) => {
    console.log(socketData, 'SOCKET_DATA');
    socketResponse = socketData;
  });

  console.log(socketResponse, 'SOCKET_RESPONSE');

  return {
    type: types.SocketLogin,
    payload: {
      action: action,
      onlineUsers: socketResponse.data,
      username: data,
    },
  };
};

const logout = ({ action, data }) => {
  return {
    type: types.SocketLogin,
    payload: {
      action,
      data,
    },
  };
};

const message = ({ action, data }) => {
  return {
    type: types.SocketLogin,
    payload: {
      action,
      data,
    },
  };
};

const socketActions = {
  connect,
  recoverMsgs,
  login,
  // getOnlineUsers,
  logout,
  message,
};

export default socketActions;
