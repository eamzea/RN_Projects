import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { WithLocalSvg } from 'react-native-svg';
import Navigator from '../Stack';
import { styles } from './styles';
import { View } from 'react-native';
import { TabStack } from 'navigator';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={styles.sceneContainer}
      screenOptions={{
        tabBarActiveTintColor: '#3560AB',
        tabBarLabelStyle: styles.tabBarLabel,
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={Navigator}
        options={{
          tabBarLabel: 'Pokedex',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <WithLocalSvg
                width="75%"
                height="75%"
                asset={require('assets/pokedex.svg')}
              />
            ) : (
              <View style={styles.activePokedex}>
                <WithLocalSvg
                  width="85%"
                  height="85%"
                  asset={require('assets/pokedex.svg')}
                />
                <View style={styles.inactivePokedexBlurred} />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={TabStack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="search-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
