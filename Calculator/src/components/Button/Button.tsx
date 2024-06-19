import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../../theme/AppTheme';

interface Props {
  text: string;
  color?: string;
  big?: boolean;
  action: (numTxt: string) => void;
}

const Button = ({text, color = '#2D2D2D', big = false, action}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        ...styles.grayButton,
        backgroundColor: color,
        width: big ? 180 : 80,
      }}
      onPress={() => action(text)}>
      <Text
        style={{
          ...styles.buttonText,
          color: color === '#9B9B9B' ? 'black' : 'white',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
