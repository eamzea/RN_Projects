import { ThemeContext } from 'context/theme';
import React, { useContext } from 'react';
import { View } from 'react-native';
import { styles } from './styles';

const Separator = () => {
  const {
    theme: { dividerColor },
  } = useContext(ThemeContext);

  return <View style={{ ...styles.separator, borderColor: dividerColor }} />;
};

export default Separator;
