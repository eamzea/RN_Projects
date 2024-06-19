import { Card, Footer, Header, Loading } from 'components';
import SearchInput from 'components/SearchInput';
import usePokemonSearch from 'hooks/usePokemonSearch';
import { SimplePokemon } from 'interfaces/interfaces';
import React, { useEffect, useState } from 'react';
import { FlatList, Keyboard, View } from 'react-native';
import { styles } from './styles';

const Search = () => {
  const { isFetching, simplePokemon } = usePokemonSearch();
  const [search, setSearch] = useState<string>('');
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    if (search.length === 0) {
      return setPokemonFiltered([]);
    }

    if (isNaN(Number(search))) {
      setPokemonFiltered(
        simplePokemon.filter(pokemon =>
          pokemon.name.toLowerCase().includes(search.toLowerCase()),
        ),
      );
    } else {
      const pokemonByID = simplePokemon.find(
        pokemon => pokemon.id === search.toLowerCase(),
      );
      setPokemonFiltered(pokemonByID ? [pokemonByID] : []);
    }
  }, [search]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View>
      <SearchInput onDebounce={setSearch} />
      <FlatList
        data={pokemonFiltered}
        keyExtractor={poke => poke.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        renderItem={({ item }) => <Card pokemon={item} />}
        ListHeaderComponent={<Header safe title={search} />}
        ListFooterComponent={<Footer safe />}
        showsVerticalScrollIndicator={false}
        onScrollBeginDrag={Keyboard.dismiss}
      />
    </View>
  );
};

export default Search;
