import React from 'react';
import { View, Text, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';

interface Props {
  title: string;
  safe?: boolean;
}

const Header: React.FC<Props> = ({ title = '', safe = false }) => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={{
        marginTop: safe
          ? Platform.OS === 'android'
            ? 90
            : top * 2.5
          : Platform.OS === 'android'
          ? 45
          : top,
        marginBottom: Platform.OS === 'android' ? 45 / 2 : top / 2,
        ...styles.titleContainer,
      }}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
