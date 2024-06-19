import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { styles } from './styles';

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#3560AB" />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

export default Loading;
