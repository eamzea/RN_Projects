import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 45,
        }}>
        Hello world
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
