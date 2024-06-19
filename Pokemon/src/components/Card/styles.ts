import { StyleSheet } from 'react-native';
import { HeightScreen, WidthScreen } from 'styles/global';

export const styles = StyleSheet.create({
  card: {
    padding: 5,
    width: WidthScreen * 0.45,
    height: HeightScreen * 0.11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 13,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 11,
    color: 'white',
  },
  imgContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 0,
    width: '55%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  pokeImg: {
    width: '75%',
    height: '75%',
    opacity: 0.5,
  },
  img: {
    width: '55%',
    aspectRatio: 1,
    resizeMode: 'center',
    position: 'absolute',
    right: '-7.5%',
    bottom: '-10%',
    zIndex: 10,
  },
  gradientContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    borderRadius: 10,
  },
});
