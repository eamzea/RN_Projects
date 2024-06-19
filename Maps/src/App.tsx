import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from 'navigator/Stack';
import PermissionsProvider from 'context/PermissionsContext';
import { ProviderProvider } from 'context';

const AppContext = ({ children }: any) => {
  return (
    <PermissionsProvider>
      <ProviderProvider>{children}</ProviderProvider>
    </PermissionsProvider>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppContext>
        <StackNavigator />
      </AppContext>
    </NavigationContainer>
  );
};

export default App;
