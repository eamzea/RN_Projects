import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box</Text>
    </View>
  );
};

export default BoxModelScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
});
