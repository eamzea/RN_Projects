import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { Icon } from 'components';
import { HeightScreen } from 'styles/global';

interface Props {
  iconName: string;
  onPress: () => void;
  position: number;
  style?: {};
  hasStyle?: boolean;
}

const Fab: React.FC<Props> = ({
  iconName,
  onPress,
  position = 1,
  style,
  hasStyle = false,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        bottom: HeightScreen * 0.035 * position ** 1.75,
      }}>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={onPress}
        style={hasStyle ? style : styles.fab}>
        <Icon name={iconName} size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Fab;
