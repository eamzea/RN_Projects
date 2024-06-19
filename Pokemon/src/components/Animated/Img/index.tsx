import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import useAnimation from 'hooks/useAnimation';

interface Props {
  uri: string;
  styles: {};
}

const AnimatedImg: React.FC<Props> = ({ uri, styles }) => {
  const [imgState, setImgState] = useState(
    'https://images3.alphacoders.com/677/677583.png',
  );
  const { opacity, fadeIn } = useAnimation();

  const loadFallBack = () => {
    setImgState('https://images3.alphacoders.com/677/677583.png');
  };

  useEffect(() => {
    setImgState(uri);
  }, []);

  return (
    <Animated.Image
      source={{ uri: imgState }}
      style={{ opacity, ...styles }}
      onLoadEnd={() => fadeIn(1, 500)}
      onError={() => loadFallBack()}
    />
  );
};

export default AnimatedImg;
