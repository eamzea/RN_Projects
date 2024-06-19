import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

// const {width, height} = Dimensions.get('window');

const DimensionsScreeen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.boxOrange} />
        <View style={styles.boxPurple} />
      </View>
      <Text>
        W: {width}, H:{height}
      </Text>
    </View>
  );
};

export default DimensionsScreeen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'blue',
  },
  boxOrange: {
    backgroundColor: 'red',
    width: '50%',
    height: '50%',
  },
  boxPurple: {
    backgroundColor: 'green',
    width: '50%',
    height: '50%',
  },
});
