const io = require('socket.io')();
const msgHandler = require('./handlers/msgHandler');
const { v1: uuidV1 } = require('uuid');

const users = {};

const createUserAvatar = () => {
  const rand1 = Math.round(Math.random() * 200 + 100);
  const rand2 = Math.round(Math.random() * 200 + 100);
  return `https://placeimg.com/${rand1}/${rand2}/any`;
};

const createUsersOnline = () => {
  const onlineUsers = Object.values(users).filter(
    user => user.username !== undefined
  );

  return onlineUsers;
};

io.on('connection', socket => {
  console.log('A User is connected');

  users[socket.id] = { userID: uuidV1() };

  // msgHandler.handleMsg(socket, users);

  socket.on('disconnect', () => {
    delete users[socket.id];

    io.emit('action', {
      type: 'users_online',
      onlineUsers: createUsersOnline(),
    });
  });

  socket.on('action', action => {
    switch (action.type) {
      case 'server/join':
        users[socket.id].username = action.data;
        users[socket.id].avatar = createUserAvatar();

        io.emit('action', {
          type: 'users_online',
          data: createUsersOnline(),
        });

        socket.emit('action', { type: 'self_user', data: users[socket.id] });
        break;
      case 'server/private_message':
        const { conversationID } = action.data;
        const from = users[socket.id].userID;
        const userValues = Object.values(users);
        const socketsIDs = Object.keys(users);

        for (let i = 0; i < userValues.length; i++) {
          if (userValues[i].userID === conversationID) {
            const socketID = socketsIDs[i];
            io.to(socketID).emit('action', {
              type: 'private_message',
              data: { ...action.data, conversationID: from },
            });
            break;
          }
        }
        break;
    }
  });
});

io.listen(4200);
