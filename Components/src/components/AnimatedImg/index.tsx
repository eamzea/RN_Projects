import useAnimation from 'hooks/useAnimation';
import React from 'react';
import { Animated } from 'react-native';

interface Props {
  uri: string;
  styles: {};
}

const AnimatedImg: React.FC<Props> = ({ uri, styles }) => {
  const { opacity, fadeIn } = useAnimation();
  return (
    <Animated.Image
      source={{ uri }}
      style={{ opacity, ...styles }}
      onLoadEnd={() => fadeIn(1, 500)}
    />
  );
};

export default AnimatedImg;
