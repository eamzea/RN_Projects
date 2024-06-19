import { Theme } from '@react-navigation/native';
import { ImageSourcePropType } from 'react-native';

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export type ThemeTypes =
  | { type: 'set_light_theme'; payload: ThemeState }
  | { type: 'set_dark_theme'; payload: ThemeState };

export interface ThemeActions {
  setLightTheme: () => ThemeTypes;
  setDarkTheme: () => ThemeTypes;
}

export interface MenuItem {
  name: string;
  icon: string;
  component: string;
}

export interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

export const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];
