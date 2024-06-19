import { Content } from 'components';
import { ThemeContext } from 'context/theme';
import React, { useContext } from 'react';
import { View } from 'react-native';
import { styles } from './styles';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  const {
    theme: {
      colors: { primary },
    },
  } = useContext(ThemeContext);

  return (
    <View style={styles.headerContainer}>
      <Content content={title} styles={{ ...styles.header, color: primary }} />
    </View>
  );
};

export default Header;
