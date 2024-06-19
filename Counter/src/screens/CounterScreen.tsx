import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Fab from '../components/Fab/Fab';

const CounterScreen = () => {
  const [counterState, setCounterState] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counterState}</Text>
      <Fab title="+1" onPress={() => setCounterState(counterState + 1)} />
      <Fab
        title="-1"
        onPress={() => setCounterState(counterState - 1)}
        position="bl"
      />
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
  },
});
