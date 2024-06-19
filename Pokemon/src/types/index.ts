import { SimplePokemon } from 'interfaces/interfaces';

export type RootStackParams = {
  Home: undefined;
  Details: {
    simplePokemon: SimplePokemon;
    colors: string[];
  };
};
