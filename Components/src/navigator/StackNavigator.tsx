import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  AlertScreen,
  Animation1Screen,
  Animation2Screen,
  HomeScreen,
  PullScreen,
  SwitchScreen,
  TextInputScreen,
  SectionScreen,
  ModalScreen,
  InfiniteScreen,
  SlidesScreen,
} from 'screens';
import { styles } from './styles';
import ThemeScreen from 'screens/Theme';
import { ThemeContext } from 'context/theme';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Group
          screenOptions={{
            headerShown: false,
            cardStyle: styles.global,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Animation1Screen" component={Animation1Screen} />
          <Stack.Screen name="Animation2Screen" component={Animation2Screen} />
          <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
          <Stack.Screen name="AlertScreen" component={AlertScreen} />
          <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
          <Stack.Screen name="PullScreen" component={PullScreen} />
          <Stack.Screen name="SectionScreen" component={SectionScreen} />
          <Stack.Screen name="ModalScreen" component={ModalScreen} />
          <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
        </Stack.Group>
        <Stack.Screen name="InfiniteScreen" component={InfiniteScreen} />
        <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
