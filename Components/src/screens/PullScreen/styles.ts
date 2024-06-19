import { Dimensions, StyleSheet } from 'react-native';
import { heightScreen } from 'styles/global';

export const styles = StyleSheet.create({
  refresher: {
    backgroundColor: '#f79ad3',
  },
  dataContainer: {
    height: heightScreen * 0.85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  data: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
