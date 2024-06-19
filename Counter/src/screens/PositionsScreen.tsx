import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PositionsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxPink} />
      <View style={styles.boxOrange} />
      <View style={styles.boxPurple} />
    </View>
  );
};

export default PositionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxPink: {
    backgroundColor: 'pink',
    borderWidth: 10,
    borderColor: 'white',
    ...StyleSheet.absoluteFillObject,
  },
  boxOrange: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
  boxPurple: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    top: -50,
    right: -50,
  },
});
