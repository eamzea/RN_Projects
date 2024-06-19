import React from 'react';
import { View } from 'react-native';
import { MenuItem } from 'interfaces';
import { styles } from './styles';
import { CustomIcon, Spacer, Content } from 'components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, CommonActions } from '@react-navigation/core';

interface Props {
  menuItem: MenuItem;
}

const FlatListItem: React.FC<Props> = ({
  menuItem: { name, icon, component },
}) => {
  const navigator = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={() =>
        navigator.dispatch(CommonActions.navigate({ name: component }))
      }>
      <View style={styles.mainContainer}>
        <CustomIcon name={icon} size={24} styles={styles.icon} />
        <Content content={name} styles={{ ...styles.text }} />
        <Spacer />
        <CustomIcon
          name="chevron-forward-outline"
          size={24}
          styles={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
};

export default FlatListItem;
