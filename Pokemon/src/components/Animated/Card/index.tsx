import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import useAnimation from 'hooks/useAnimation';

interface Props {
  children: JSX.Element | JSX.Element[];
  styles: {};
}

const AnimatedCard: React.FC<Props> = ({ children, styles }) => {
  const { opacity, fadeIn } = useAnimation();

  useEffect(() => {
    fadeIn(1, 300);
  });

  return (
    <Animated.View style={{ opacity, ...styles }}>{children}</Animated.View>
  );
};

export default AnimatedCard;
