import { StyleSheet } from 'react-native';
import { HeightScreen, WidthScreen } from 'styles/global';

export const styles = StyleSheet.create({
  scrollContainer: {
    ...StyleSheet.absoluteFillObject,
    marginTop: HeightScreen * 0.45,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: WidthScreen * 0.025,
  },
  version: {
    fontSize: 24,
    paddingHorizontal: WidthScreen * 0.075,
  },
  bodyContainer: {
    flexDirection: 'row',
    marginVertical: HeightScreen * 0.015,
    paddingHorizontal: WidthScreen * 0.025,
  },
  bodyColumnContainer: {
    flexDirection: 'column',
    marginVertical: HeightScreen * 0.015,
    paddingHorizontal: WidthScreen * 0.025,
  },
  bodyNested: {
    flexDirection: 'row',
  },
  body: {
    fontSize: 24,
    marginLeft: WidthScreen * 0.025,
  },
  bodyAligned: {
    width: '50%',
    fontSize: 24,
  },
  flatlist: {
    marginVertical: 5,
  },
  otherSpritesContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  maximumSpritesContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: WidthScreen * 0.075,
  },
  spriteImgContainer: {
    width: WidthScreen * 0.25,
    height: WidthScreen * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sprite: {
    ...StyleSheet.absoluteFillObject,
  },
  otherSprite: {
    width: '75%',
    aspectRatio: 1,
  },
  spriteDescriptionContainer: {
    flexDirection: 'row',
    width: WidthScreen * 0.25,
    justifyContent: 'center',
  },
  spriteDescription: {
    fontSize: 12,
  },
  safeFooter: {
    height: HeightScreen * 0.05,
  },
});
