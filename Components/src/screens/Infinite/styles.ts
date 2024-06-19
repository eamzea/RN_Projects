import { StyleSheet } from 'react-native';
import { heightScreen, widthScreen } from 'styles/global';

export const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 10,
  },
  imgContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    paddingHorizontal: 10,
    width: widthScreen,
    height: heightScreen * 0.3,
    marginVertical: 10,
  },
  img: {
    width: '100%',
    aspectRatio: 3 / 2,
    borderRadius: 5,
  },
  footerLoad: {
    height: heightScreen * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
