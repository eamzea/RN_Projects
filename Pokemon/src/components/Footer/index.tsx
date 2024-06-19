import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { colors } from 'styles/global';
import { styles } from './styles';

interface Props {
  safe?: boolean;
}

const Footer = ({ safe = false }) => {
  return (
    <View style={safe ? styles.footerSafe : styles.footerLoad}>
      {!safe && <ActivityIndicator size="large" color={colors.primary} />}
    </View>
  );
};

export default Footer;
