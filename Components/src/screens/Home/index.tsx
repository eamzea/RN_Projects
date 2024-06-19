import React from 'react';
import { View, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListItem, Separator, Header } from 'components';
import { menuItems } from 'screens/screens';
import { globalStyles } from 'styles/global';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ ...globalStyles.globalContainer, paddingTop: top }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <Header title="Home" />}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
};

export default HomeScreen;
