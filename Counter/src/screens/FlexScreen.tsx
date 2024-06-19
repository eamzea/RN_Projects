import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Box 1</Text>
      <Text style={styles.box2}>Box 2</Text>
      <Text style={styles.box3}>Box 3</Text>
    </View>
  );
};

export default FlexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    flexDirection: 'row-reverse',
  },
  box1: {
    fontSize: 30,
    borderWidth: 2,
    borderColor: 'white',
  },
  box2: {fontSize: 30, borderWidth: 2, borderColor: 'white'},
  box3: {fontSize: 30, borderWidth: 2, borderColor: 'white'},
});
