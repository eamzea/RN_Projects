import { StyleSheet } from 'react-native';
import { colors, WidthScreen } from 'styles/global';

export const buttonStyles = StyleSheet.create({
  button: {
    minWidth: WidthScreen * 0.25,
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: WidthScreen * 0.25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
