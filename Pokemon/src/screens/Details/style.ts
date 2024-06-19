import { StyleSheet } from 'react-native';
import { HeightScreen, WidthScreen } from 'styles/global';

export const styles = StyleSheet.create({
  container: { flex: 1 },
  card: {
    width: WidthScreen,
    height: HeightScreen * 0.45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    zIndex: 2,
  },
  gradientContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'column',
    paddingHorizontal: WidthScreen * 0.02,
    borderBottomLeftRadius: WidthScreen * 0.5,
    borderBottomRightRadius: WidthScreen * 0.5,
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
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokeImg: {
    width: WidthScreen * 0.5,
    height: WidthScreen * 0.5,
    opacity: 0.5,
  },
  img: {
    width: WidthScreen * 0.45,
    aspectRatio: 1,
    position: 'absolute',
    bottom: -WidthScreen * 0.045,
    right: WidthScreen * 0.225,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  id: {
    fontSize: 28,
    color: 'white',
  },
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
