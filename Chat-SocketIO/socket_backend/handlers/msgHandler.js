let currentMsgID = 1;

const createMessage = (user, messageTxt) => {
  return {
    _id: currentMsgID++,
    text: messageTxt,
    createdAt: new Date(),
    user: {
      _id: user.userID,
      name: user.username,
      avatar: user.avatar,
    },
  };
};

const handleMsg = (socket, users) => {
  socket.on('message', messageText => {
    const user = users[socket.id];
    const message = createMessage(user, messageText);

    socket.broadcast.emit('message', message);
  });
};

module.exports = { handleMsg };
