import { StyleSheet } from 'react-native';
import { HeightScreen, WidthScreen } from 'styles/global';

export const styles = StyleSheet.create({
  loadingContainer: {
    width: WidthScreen,
    height: HeightScreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: HeightScreen * 0.025,
    fontSize: 24,
    fontWeight: '100',
  },
});
