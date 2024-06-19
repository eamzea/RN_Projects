import { StyleSheet } from 'react-native';
import { HeightScreen } from 'styles/global';

export const styles = StyleSheet.create({
  footerLoad: {
    height: HeightScreen * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerSafe: {
    height: HeightScreen * 0.1,
  },
});
