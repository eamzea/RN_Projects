import { useEffect, useState } from 'react';

const useSprites = (sprites: any) => {
  const [spriteState, setSpriteState] = useState({} as any);

  useEffect(() => {
    setSpriteState({
      defaultSprites: Object.keys(sprites)
        .map(key => [key, sprites[key]])
        .filter(sprite => typeof sprite[1] === 'string'),
      otherSprites: Object.keys(sprites.other)
        .flatMap(firstKey =>
          Object.keys(sprites.other[firstKey]).map(secondKey => [
            secondKey,
            sprites.other[firstKey][secondKey],
          ]),
        )
        .filter(sprite => typeof sprite[1] === 'string'),
      generations: Object.keys(sprites.versions),
    });
  }, [sprites]);

  return {
    spriteState,
  };
};

export default useSprites;
