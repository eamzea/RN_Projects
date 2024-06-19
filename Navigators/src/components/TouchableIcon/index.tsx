import { AuthContext } from 'context/AuthContext';
import React from 'react';
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from 'theme/AppTheme';

interface Props {
  iconName: string;
}

const TouchableIcon: React.FC<Props> = ({ iconName }) => {
  const { changeFavIcon } = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => changeFavIcon(iconName)}>
      <Icon name={iconName} size={50} color={colors.primary} />
    </TouchableOpacity>
  );
};

export default TouchableIcon;
