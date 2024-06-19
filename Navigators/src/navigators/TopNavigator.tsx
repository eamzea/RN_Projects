import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { AlbumsScreen, Chatscreen, ContactsScreen } from 'screens';
import { colors } from 'theme/AppTheme';

interface RouteNames {
  [key: string]: string;
}
const Tab = createMaterialTopTabNavigator();

// const routeNames: RouteNames = {
//   Chat: 'CH',
//   Contacts: 'CT',
//   Albums: 'AM',
// };

const TopNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={() => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        tabBarIcon: ({ color }) => (
          <Icon name="anchor" size={20} color={color} />
        ),
      })}>
      <Tab.Screen name="Chat" component={Chatscreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};

export default TopNavigator;
