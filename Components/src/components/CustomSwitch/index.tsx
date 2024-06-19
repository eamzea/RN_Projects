import { ThemeContext } from 'context/theme';
import React, { useContext } from 'react';
import { Switch } from 'react-native';

interface Props {
  isEnabled: boolean;
  color?: string;
  toggleSwitch: (value: any) => void;
}

const CustomSwitch: React.FC<Props> = ({ isEnabled, toggleSwitch, color }) => {
  const {
    theme: {
      colors: { primary, border },
    },
  } = useContext(ThemeContext);

  return (
    <Switch
      trackColor={{ false: '#fff', true: border }}
      thumbColor={color || primary}
      ios_backgroundColor="#fff"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default CustomSwitch;
