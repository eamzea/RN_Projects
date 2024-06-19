import React, { useState } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header, Content } from 'components';
import { styles } from './styles';
import { globalStyles } from 'styles/global';

const PullScreen = () => {
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState<string>('');
  const { top } = useSafeAreaInsets();

  const onRefresh = () => {
    setRefresh(true);

    setTimeout(() => {
      console.log('refreshing');
      setRefresh(false);
      setData('Data updated');
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refresh}
          onRefresh={onRefresh}
          progressBackgroundColor="#5856D6"
          style={styles.refresher}
          tintColor="white"
        />
      }
      style={{
        ...globalStyles.globalContainer,
        paddingTop: top,
      }}>
      <Header title="Pull to Refresh" />
      <View style={styles.dataContainer}>
        <Content content={data} styles={styles.data} />
      </View>
    </ScrollView>
  );
};

export default PullScreen;
