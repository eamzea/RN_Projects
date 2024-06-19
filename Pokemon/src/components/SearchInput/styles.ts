import { StyleSheet } from 'react-native';
import { WidthScreen } from 'styles/global';

export const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: WidthScreen * 0.025,
    position: 'absolute',
    width: WidthScreen,
    zIndex: 10,
  },
  container: {
    width: '100%',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F3F1F3',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 16.0,
    elevation: 24,
  },
  input: {
    flex: 1,
    padding: 5,
  },
});
