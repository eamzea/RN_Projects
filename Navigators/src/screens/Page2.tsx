import React from 'react';
import { Button } from 'react-native';
import { View, Text } from 'react-native';
import { styles } from '../theme/AppTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const Page2 = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hello',
      headerBackTitle: 'Back',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page2</Text>
      <Button
        title="Go Page 3"
        onPress={() =>
          navigator.dispatch(
            CommonActions.navigate({
              name: 'Page3',
            }),
          )
        }
      />
    </View>
  );
};

export default Page2;
