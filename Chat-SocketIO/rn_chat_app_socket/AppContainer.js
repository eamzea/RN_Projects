import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JoinScreen from './screens/JoinScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FriendListScreen from './screens/FriendListScreen';
import ChatScreen from './screens/ChatScreen';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Join">
        <Stack.Screen name="Home" component={FriendListScreen} />
        <Stack.Screen name="Join" component={JoinScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
