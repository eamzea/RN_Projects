import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

const BasicDrawerNavigator = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ drawerType: width >= 768 ? 'permanent' : 'front' }}>
      <Drawer.Screen
        name="Home"
        options={{
          title: 'Home',
        }}
        component={StackNavigator}
      />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default BasicDrawerNavigator;
