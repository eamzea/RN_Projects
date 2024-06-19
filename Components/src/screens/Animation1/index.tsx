import React from 'react';
import useAnimation from 'hooks/useAnimation';
import { Animated, Button, View } from 'react-native';
import { styles } from './styles';
import { globalStyles, heightScreen } from 'styles/global';

const Animation1 = () => {
  const { opacity, position, movePosition, fadeIn, fadeOut } = useAnimation();

  return (
    <View style={[styles.main, globalStyles.globalContainer]}>
      <Animated.View
        style={{
          ...styles.box,
          opacity,
          transform: [{ translateY: position }],
        }}
      />
      <View style={styles.buttons}>
        <Button
          title="Fade In"
          onPress={() => {
            movePosition(-(heightScreen / 2) - 60, 0, 500, 'bounce');
            fadeIn(1, 500);
          }}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title="Fade Out"
          onPress={() => {
            fadeOut(0, 500);
            movePosition(0, -(heightScreen / 2) - 60, 500);
          }}
        />
      </View>
    </View>
  );
};

export default Animation1;
