import React from 'react';
import { Image, FlatList } from 'react-native';
import usePokePaginate from 'hooks/usePokePaginate';
import { styles } from './styles';
import { Card } from 'components';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Home = () => {
  const { simplePokemon, loadPokemons } = usePokePaginate();

  return (
    <>
      <Image source={require('assets/pokebola.png')} style={styles.headerImg} />
      <FlatList
        data={simplePokemon}
        keyExtractor={poke => poke.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        renderItem={({ item }) => <Card pokemon={item} />}
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={<Header title="Pokedex" />}
        ListFooterComponent={<Footer />}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Home;
