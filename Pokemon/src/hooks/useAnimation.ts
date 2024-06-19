import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = (end: number = 1, duration: number = 500) => {
    Animated.timing(opacity, {
      toValue: end,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = (end: number, duration: number) => {
    Animated.timing(opacity, {
      toValue: end,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  const movePosition = (
    start: number,
    end: number,
    duration: number,
    easing: any = 'linear',
  ) => {
    position.setValue(start);
    Animated.timing(position, {
      toValue: end,
      duration: duration,
      useNativeDriver: true,
      easing: Easing[easing],
    }).start();
  };

  return {
    opacity,
    position,
    fadeIn,
    fadeOut,
    movePosition,
  };
};

export default useAnimation;
