import { ThemeContext } from 'context/theme';
import React, { useContext } from 'react';
import { Text } from 'react-native';

interface Props {
  content: string;
  styles?: {};
}

const Content: React.FC<Props> = ({ content, styles }) => {
  const {
    theme: {
      colors: { text },
    },
  } = useContext(ThemeContext);

  return <Text style={{ color: text, ...styles }}>{content}</Text>;
};

export default Content;
