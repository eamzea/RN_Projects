import React from 'react';
import { View, Button, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header } from 'components';
import { globalStyles } from 'styles/global';

const AlertScreen = () => {
  const { top } = useSafeAreaInsets();

  const showAlert = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };

  const showPrompt = () => {
    Alert.prompt('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };

  return (
    <View style={{ ...globalStyles.globalContainer, marginTop: top }}>
      <Header title="Alert" />
      <Button title="Show Alert" onPress={showAlert} />
      <Button title="Show Prompt" onPress={showPrompt} />
    </View>
  );
};

export default AlertScreen;
