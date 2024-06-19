import { TouchableIcon } from 'components';
import React from 'react';
import { View, Text } from 'react-native';

const Tab1Screen = () => {
  return (
    <View>
      <Text>Tab 1 Screen</Text>
      <TouchableIcon iconName="headphones" />
      <TouchableIcon iconName="activity" />
      <TouchableIcon iconName="airplay" />
      <TouchableIcon iconName="anchor" />
      <TouchableIcon iconName="aperture" />
    </View>
  );
};

export default Tab1Screen;
