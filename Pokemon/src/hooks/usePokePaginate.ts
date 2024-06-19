import { useEffect, useRef, useState } from 'react';
import pokeApi from 'api/pokeApi';
import { PokeResponse, Result, SimplePokemon } from 'interfaces/interfaces';

const usePokePaginate = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [simplePokemon, setSimplePokemon] = useState<SimplePokemon[]>([]);
  const dynamicUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=25');

  const loadPokemons = async () => {
    setIsLoading(true);
    const { data } = await pokeApi.get<PokeResponse>(dynamicUrl.current);
    dynamicUrl.current = data.next;

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

    setSimplePokemon([...simplePokemon, ...pokeList]);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    isLoading,
    simplePokemon,
    loadPokemons,
  };
};

export default usePokePaginate;
