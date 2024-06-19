import React, { useState } from 'react';
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';

const JoinScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [usernameState, setUsernameState] = useState(null);

  const handleUsername = username => setUsernameState(username);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <StatusBar barStyle="dark-content" />
        <Icon name="chat-bubble" size={50} />
        <TextInput
          placeholder="Enter username"
          style={{ fontSize: 30, marginVertical: 20, textAlign: 'center' }}
          onChangeText={handleUsername}
          value={usernameState}
        />
        <Button
          title="Join Chat"
          onPress={() => {
            dispatch({ type: 'server/join', data: usernameState });
            navigation.replace('Home');
          }}
        />
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JoinScreen;
