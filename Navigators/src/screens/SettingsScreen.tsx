import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from 'context/AuthContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import { colors, styles } from 'theme/AppTheme';

const SettingsScreen = () => {
  const { authState } = useContext(AuthContext);
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ marginTop: top, ...styles.globalMargin }}>
      <Text style={styles.title}>Settings Screen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {authState.favoriteIcon && (
        <Icon name={authState.favoriteIcon} size={150} color={colors.primary} />
      )}
    </View>
  );
};

export default SettingsScreen;
