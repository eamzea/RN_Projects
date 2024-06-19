import { StyleSheet } from 'react-native';
import { WidthScreen } from 'styles/global';

export const styles = StyleSheet.create({
  headerImg: {
    position: 'absolute',
    top: -125,
    right: -125,
    width: 300,
    height: 300,
    opacity: 0.2,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    paddingHorizontal: WidthScreen * 0.025,
  },
});
