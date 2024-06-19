import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../theme/AppTheme';

interface Props extends StackScreenProps<any, any> {}

const Page1 = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1</Text>
      <Button title="Go Page 2" onPress={() => navigation.navigate('Page2')} />
      <Text style={styles.description}>Navigate with params</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity
          style={{ ...styles.personBtns, ...styles.goddardBtn }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Goddard',
            })
          }>
          <Icon name="dog-side" size={25} color="white" />
          <Text style={styles.personBtnTxt}>Goddard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.personBtns, ...styles.gydaBtn }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'Gyda',
            })
          }>
          <Icon name="dog-side" size={25} color="white" />
          <Text style={styles.personBtnTxt}>Gyda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page1;
