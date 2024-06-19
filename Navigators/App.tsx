import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import StackNavigator from './src/navigator/StackNavigator';
// import BasicDrawerNavigator from './src/navigator/BasicDrawerNavigator';
import { DrawerNavigator } from 'navigators';
import AuthProvider from 'context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <BasicDrawerNavigator /> */}
        <DrawerNavigator />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({ children }: { children: JSX.Element }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default App;
