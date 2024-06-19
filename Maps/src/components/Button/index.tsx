import React from 'react';
import { TouchableOpacity } from 'react-native';
import { buttonStyles } from './styles';

interface Props {
  children: JSX.Element | JSX.Element[];
  onPress: () => void;
  opacity?: number;
  hasStyles?: boolean;
  styles?: {};
}

const Button: React.FC<Props> = ({
  children,
  onPress,
  opacity = 0.8,
  styles,
  hasStyles = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={opacity}
      style={hasStyles ? styles : buttonStyles.button}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
