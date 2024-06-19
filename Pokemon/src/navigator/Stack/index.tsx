import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Details, Home } from 'screens';
import { global } from 'styles/global';
import { RootStackParams } from 'types';

const Stack = createStackNavigator<RootStackParams>();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: global.global,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default Navigator;
