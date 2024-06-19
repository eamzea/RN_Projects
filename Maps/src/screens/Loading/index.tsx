import React from 'react';
import { View, Text } from 'react-native';
import { Loading } from 'components';

const LoadingScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Loading />
      <Text>Loading</Text>
    </View>
  );
};

export default LoadingScreen;
