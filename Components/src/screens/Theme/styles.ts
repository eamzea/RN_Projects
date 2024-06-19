import { StyleSheet } from 'react-native';
import { widthScreen } from 'styles/global';

export const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  themeBtn: {
    width: widthScreen * 0.45,
    backgroundColor: '#79addc',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  fBText: {
    color: 'white',
    fontSize: 24,
  },
});
