import React, { useLayoutEffect } from 'react';
import { Keyboard, KeyboardAvoidingView, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { GiftedChat } from 'react-native-gifted-chat';
import { useDispatch, useSelector } from 'react-redux';

const ChatScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const selfUser = useSelector(state => state.selfUser);
  const conversations = useSelector(state => state.conversations);

  const { name, userID } = route.params;
  const messages = conversations[userID].messages;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
      headerBackTitleVisible: false,
      headerTitleAlign: 'left',
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} />
      <KeyboardAvoidingView behavior="padding" />
      <GiftedChat
        renderUsernameOnMessage
        messages={messages}
        showUserAvatar={true}
        showAvatarForEveryMessage={true}
        onSend={messages => {
          dispatch({
            type: 'private_message',
            data: { message: messages[0], conversationID: userID },
          });
          dispatch({
            type: 'server/private_message',
            data: { message: messages[0], conversationID: userID },
          });
        }}
        user={{
          _id: selfUser.userID,
          name: selfUser.username,
          avatar: selfUser.avatar,
        }}
        isTyping={true}
      />
    </View>
  );
};

export default ChatScreen;
