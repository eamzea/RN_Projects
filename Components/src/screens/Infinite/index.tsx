import { AnimatedImg, Header } from 'components';
import React, { useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from 'styles/global';
import { styles } from './styles';

const InfiniteScreen = () => {
  const [n, setN] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const loadMore = () => {
    const nArray: number[] = [];

    for (let i = 0; i < 10; i++) {
      nArray[i] = n.length + i;
    }

    setTimeout(() => {
      setN([...n, ...nArray]);
    }, 1500);
  };

  const { top } = useSafeAreaInsets();

  const renderItem = (item: number) => (
    <View style={styles.imgContainer}>
      <AnimatedImg
        uri={`https://picsum.photos/id/${item}/500/500`}
        styles={styles.img}
      />
    </View>
  );

  return (
    <View style={{ ...globalStyles.globalContainer }}>
      <FlatList
        data={n}
        keyExtractor={(item, index) => (item + index).toString()}
        ListHeaderComponent={() => <Header title="Infinite Screen" />}
        ListHeaderComponentStyle={{ marginTop: top, ...styles.header }}
        renderItem={({ item }) => renderItem(item)}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <View style={styles.footerLoad}>
            <ActivityIndicator size="large" />
          </View>
        )}
      />
    </View>
  );
};

export default InfiniteScreen;
