import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PersonScreen, Screen1, Screen2, Screen3 } from '../screens';

export type RootStackParams = {
  Page1: undefined;
  Page2: undefined;
  Page3: undefined;
  PersonScreen: { id: number; name: string };
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
        // headerShown: false,
      }}>
      <Stack.Screen
        name="Page1"
        options={{ title: 'Page 1', headerShown: false }}
        component={Screen1}
      />
      <Stack.Screen
        name="Page2"
        options={{ title: 'Page 2' }}
        component={Screen2}
      />
      <Stack.Screen
        name="Page3"
        options={{ title: 'Page 3' }}
        component={Screen3}
      />
      <Stack.Screen
        name="PersonScreen"
        // options={{ title: 'Person Screen' }}
        component={PersonScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
