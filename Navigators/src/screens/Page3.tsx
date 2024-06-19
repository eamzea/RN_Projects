import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/AppTheme';

interface Props extends StackScreenProps<any, any> {}

const Page3 = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page3</Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Go Page 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Page3;
