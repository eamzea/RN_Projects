import { ThemeContext } from 'context/theme';
import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string;
  size: number;
  color?: string;
  styles?: {};
}

const CustomIcon: React.FC<Props> = ({ name, size, color, styles }) => {
  const {
    theme: {
      colors: { primary },
    },
  } = useContext(ThemeContext);
  return (
    <Icon name={name} size={size} color={color || primary} style={styles} />
  );
};

export default CustomIcon;
