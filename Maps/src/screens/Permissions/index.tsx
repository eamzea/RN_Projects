import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'components';
import { styles } from './styles';
import { PermissionsContext } from 'context/PermissionsContext';

const Permissions = () => {
  const { permissions, askLocationPermission } = useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <Text>Permissions Screen</Text>
      <Button opacity={0.75} onPress={askLocationPermission}>
        <Text style={styles.textButton}>Check</Text>
      </Button>
    </View>
  );
};

export default Permissions;
