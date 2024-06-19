import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import useAnimation from 'hooks/useAnimation';

interface Props {
  styles: {};
  capitalize?: boolean;
}

const AnimatedText: React.FC<Props> = ({
  styles,
  capitalize = false,
  children,
}) => {
  const { opacity, fadeIn } = useAnimation();

  useEffect(() => {
    fadeIn(1, 2000);
  }, []);

  return (
    <Animated.Text style={{ opacity, ...styles }}>
      {capitalize
        ? children.charAt(0).toUpperCase() + children.slice(1)
        : children}
    </Animated.Text>
  );
};

export default AnimatedText;
