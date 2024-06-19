import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Details, Search } from 'screens';
import { global } from 'styles/global';
import { RootStackParams } from 'types';

const Stack = createStackNavigator<RootStackParams>();

const TabStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: global.global,
      }}>
      <Stack.Screen name="Home" component={Search} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default TabStack;
