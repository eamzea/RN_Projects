import { Dimensions, StyleSheet } from 'react-native';

export const colors = {
  white: '#F1F1F1',
  primary: '#0B0A07',
};

export const { width: WidthScreen, height: HeightScreen } =
  Dimensions.get('screen');

export const global = StyleSheet.create({
  cardStyle: {
    backgroundColor: colors.white,
  },
});
