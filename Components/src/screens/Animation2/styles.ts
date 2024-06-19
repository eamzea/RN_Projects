import { StyleSheet } from 'react-native';
import { widthScreen } from 'styles/global';

export const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#75CEDB',
    width: widthScreen * 0.5,
    aspectRatio: 1,
    borderRadius: 10,
  },
});
