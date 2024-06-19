import { Dimensions, StyleSheet } from 'react-native';

export const { width: widthScreen, height: heightScreen } =
  Dimensions.get('screen');

export const globalStyles = StyleSheet.create({
  globalContainer: {
    flex: 1,
  },
});
