import { StyleSheet } from 'react-native';
import { widthScreen } from 'styles/global';

export const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#5856D6',
    width: widthScreen * 0.5,
    aspectRatio: 1,
    borderRadius: 10,
  },
  buttons: {
    marginVertical: 10,
  },
});
