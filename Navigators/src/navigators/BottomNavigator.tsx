import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from 'screens';
import Icon from 'react-native-vector-icons/Feather';
import StackNavigator from './StackNavigator';
import { colors } from 'theme/AppTheme';
import { Platform } from 'react-native';
import TopNavigator from './TopNavigator';

interface RouteNames {
  [key: string]: string;
}

// const routeNames: RouteNames = {
//   Tab1Screen: 'T1',
//   Tab2Screen: 'T2',
//   Stack: 'ST',
// };

const TabIOS = createBottomTabNavigator();
const TabANDROID = createMaterialBottomTabNavigator();

const BottomIOSNavigator = () => {
  return (
    <TabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={() => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          elevation: 0,
          borderTopWidth: 0,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarIcon: ({ color, size }) => (
          <Icon name="anchor" size={size} color={color} />
        ),
      })}>
      <TabIOS.Screen
        name="Tab1Screen"
        options={{ title: 'Tab 1' }}
        component={Tab1Screen}
      />
      <TabIOS.Screen
        name="Tab2Screen"
        options={{ title: 'Tab 2' }}
        component={TopNavigator}
      />
      <TabIOS.Screen
        name="Stack"
        options={{ title: 'Stack' }}
        component={StackNavigator}
      />
    </TabIOS.Navigator>
  );
};

const BottomANDROIDNavigator = () => {
  return (
    <TabANDROID.Navigator
      sceneAnimationEnabled={true}
      barStyle={{ backgroundColor: colors.primary }}
      screenOptions={() => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarIcon: ({ color }) => (
          <Icon name="anchor" size={20} color={color} />
        ),
      })}>
      <TabANDROID.Screen
        name="Tab1Screen"
        options={{ title: 'Tab 1' }}
        component={Tab1Screen}
      />
      <TabANDROID.Screen
        name="Tab2Screen"
        options={{ title: 'Tab 2' }}
        component={TopNavigator}
      />
      <TabANDROID.Screen
        name="StackNavigator"
        options={{ title: 'Stack' }}
        component={StackNavigator}
      />
    </TabANDROID.Navigator>
  );
};

const BottomNavigator = () =>
  Platform.OS === 'ios' ? <BottomIOSNavigator /> : <BottomANDROIDNavigator />;

export default BottomNavigator;
