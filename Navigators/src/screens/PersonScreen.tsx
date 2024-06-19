import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from 'context/AuthContext';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { RootStackParams } from '../navigators/StackNavigator';
import { styles } from '../theme/AppTheme';

// interface RouteParams {
//   id: number;
//   name: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}

const PersonScreen = ({ route, navigation }: Props) => {
  // const params = route.params as RouteParams;
  const params = route.params;
  const { changeUsername } = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, [navigation, params]);

  useEffect(() => {
    changeUsername(params.name);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text>Person</Text>
      <Text>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

export default PersonScreen;
