import { AuthContext } from 'context/AuthContext';
import React from 'react';
import { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from 'theme/AppTheme';

const AlbumsScreen = () => {
  const {
    authState: { isLogged },
    logOut,
  } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Album Screen</Text>
      {isLogged && <Button title="Logout" onPress={logOut} />}
    </View>
  );
};

export default AlbumsScreen;
