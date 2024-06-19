import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string;
  size: number;
  color: string;
}

const CustomIcon: React.FC<Props> = ({ name, size, color }) => {
  return <Icon name={name} size={size} color={color} />;
};

export default CustomIcon;
