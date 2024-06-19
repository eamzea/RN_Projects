import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PermissionsScreen, MapsScreen, LoadingScreen } from 'screens';
import { global } from 'styles/global';
import { PermissionsContext } from '../context/PermissionsContext/index';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const {
    permissions: { locationStatus },
  } = useContext(PermissionsContext);

  if (locationStatus === 'unavailable') {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: global.cardStyle,
      }}>
      {locationStatus === 'granted' ? (
        <Stack.Screen name="Maps" component={MapsScreen} />
      ) : (
        <Stack.Screen name="Permissions" component={PermissionsScreen} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
