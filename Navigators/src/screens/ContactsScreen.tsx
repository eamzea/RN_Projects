import { AuthContext } from 'context/AuthContext';
import React from 'react';
import { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from 'theme/AppTheme';

const ContactsScreen = () => {
  const {
    authState: { isLogged },
    signIn,
  } = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contacts Screen</Text>
      {!isLogged && <Button title="Sign In" onPress={signIn} />}
    </View>
  );
};

export default ContactsScreen;
