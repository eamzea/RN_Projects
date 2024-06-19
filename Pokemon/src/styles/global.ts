import { Dimensions, StyleSheet } from 'react-native';

export const { width: WidthScreen, height: HeightScreen } =
  Dimensions.get('screen');

export const global = StyleSheet.create({
  global: {
    // paddingHorizontal: WidthScreen * 0.025,
    backgroundColor: 'white',
  },
});

export const colors = {
  primary: '#EF534F',
};
