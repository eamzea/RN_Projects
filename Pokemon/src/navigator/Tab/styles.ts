import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: 'white',
  },
  tabBar: {
    borderTopWidth: 0,
    elevation: 0,
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.85)',
  },
  tabBarLabel: {
    fontWeight: 'bold',
  },
  inactivePokedexBlurred: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  activePokedex: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
