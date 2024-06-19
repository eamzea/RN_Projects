import { useEffect, useState } from 'react';
import pokeApi from 'api/pokeApi';
import { PokeResponse, Result, SimplePokemon } from 'interfaces/interfaces';

const usePokemonSearch = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [simplePokemon, setSimplePokemon] = useState<SimplePokemon[]>([]);

  const loadPokemons = async () => {
    const { data } = await pokeApi.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=1200',
    );

    mapResults(data.results);
  };

  const mapResults = (list: Result[]) => {
    const pokeList = list.map(({ name, url }) => {
      let urlSections = url.split('/');
      const id = urlSections[urlSections.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return {
        id,
        name,
        picture,
      };
    });

    setSimplePokemon(pokeList);
    setIsFetching(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    isFetching,
    simplePokemon,
  };
};

export default usePokemonSearch;
