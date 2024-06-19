import { useEffect, useState } from 'react';
import { PokemonFullResponse } from 'interfaces/interfaces';
import pokeApi from 'api/pokeApi';

const usePokemon = id => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonFullResponse>(
    {} as PokemonFullResponse,
  );

  const loadPokemon = async () => {
    const { data } = await pokeApi.get<PokemonFullResponse>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );

    setPokemon(data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return { isLoading, pokemon };
};

export default usePokemon;
