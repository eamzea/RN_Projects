import { StyleSheet } from 'react-native';
import { colors, HeightScreen, WidthScreen } from 'styles/global';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: WidthScreen * 0.075,
    zIndex: 10,
  },
  fab: {
    backgroundColor: colors.primary,
    borderRadius: WidthScreen * 0.15,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    width: WidthScreen * 0.15,
    aspectRatio: 1,
  },
});
