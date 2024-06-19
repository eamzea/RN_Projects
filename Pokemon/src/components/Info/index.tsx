import React from 'react';
import { View, ScrollView } from 'react-native';
import { AnimatedText } from 'components/Animated';
import { PokemonFullResponse } from 'interfaces/interfaces';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';
import { Sprites } from 'components';
import useSprites from 'hooks/useSprites';

interface Props {
  pokemon: PokemonFullResponse;
}

const Info: React.FC<Props> = ({ pokemon }) => {
  const { bottom } = useSafeAreaInsets();
  const {
    spriteState: { defaultSprites, otherSprites, generations },
  } = useSprites(pokemon.sprites);

  return (
    <ScrollView
      style={[styles.scrollContainer, { paddingBottom: bottom * 2 }]}
      showsVerticalScrollIndicator={false}>
      <AnimatedText styles={styles.title}>Weight</AnimatedText>
      <View style={styles.bodyContainer}>
        <AnimatedText styles={styles.body}>{pokemon.weight} lb</AnimatedText>
      </View>
      <AnimatedText styles={styles.title}>Types</AnimatedText>
      <View style={styles.bodyContainer}>
        {pokemon.types.map(type => (
          <AnimatedText
            styles={styles.body}
            key={`${type.type.name}+${Math.random()}`}
            capitalize={true}>
            {type.type.name}
          </AnimatedText>
        ))}
      </View>
      <AnimatedText styles={styles.title}>Sprites</AnimatedText>
      <Sprites
        data={defaultSprites}
        flatStyles={styles.flatlist}
        itemContainerStyles={styles.otherSpritesContainer}
        spriteContainerStyles={styles.spriteImgContainer}
        spriteStyles={styles.sprite}
        spriteDescriptionContainerStyles={styles.spriteDescriptionContainer}
        spriteDescriptionStyles={styles.spriteDescription}
      />
      <AnimatedText styles={styles.title}>Others</AnimatedText>
      <Sprites
        data={otherSprites}
        flatStyles={styles.flatlist}
        itemContainerStyles={styles.otherSpritesContainer}
        spriteContainerStyles={styles.spriteImgContainer}
        spriteStyles={styles.otherSprite}
        spriteDescriptionContainerStyles={styles.spriteDescriptionContainer}
        spriteDescriptionStyles={styles.spriteDescription}
      />
      {generations?.map(generation => {
        const versions = Object.keys(pokemon.sprites.versions[generation]);

        return (
          <>
            <AnimatedText
              styles={styles.title}
              capitalize
              key={`${generation}+${Math.random()}`}>
              {generation}
            </AnimatedText>
            {versions.map(version => {
              const keyVersionImg = Object.keys(
                pokemon.sprites.versions[generation][version],
              ).map(kvi => {
                if (
                  typeof pokemon.sprites.versions[generation][version][kvi] ===
                    'object' &&
                  pokemon.sprites.versions[generation][version][kvi] !== null
                ) {
                  return Object.keys(
                    pokemon.sprites.versions[generation][version][kvi],
                  )
                    .map(kai => [
                      kai,
                      pokemon.sprites.versions[generation][version][kvi][kai],
                    ])
                    .filter(keyImg => keyImg[1] !== null);
                } else {
                  return [
                    kvi,
                    pokemon.sprites.versions[generation][version][kvi],
                  ];
                }
              });

              const nA = [];

              keyVersionImg.forEach(kei => {
                if (typeof kei[0] === 'string' && typeof kei[1] === 'string') {
                  nA.push(kei);
                } else {
                  if (kei[1] !== null) {
                    kei.forEach(anim => {
                      nA.push(anim);
                    });
                  }
                }
              });

              return (
                <>
                  <AnimatedText
                    styles={styles.version}
                    capitalize
                    key={`${generation}+${version}+${Math.random()}`}>
                    {version}
                  </AnimatedText>
                  <Sprites
                    data={nA}
                    flatStyles={styles.flatlist}
                    itemContainerStyles={styles.maximumSpritesContainer}
                    spriteContainerStyles={styles.spriteImgContainer}
                    spriteStyles={styles.otherSprite}
                    spriteDescriptionContainerStyles={
                      styles.spriteDescriptionContainer
                    }
                    spriteDescriptionStyles={styles.spriteDescription}
                  />
                </>
              );
            })}
          </>
        );
      })}
      <AnimatedText styles={styles.title}>Base Abilities</AnimatedText>
      <View style={styles.bodyContainer}>
        {pokemon.abilities.map(({ ability }) => (
          <AnimatedText
            styles={styles.body}
            key={`${ability.name}+${Math.random()}`}
            capitalize={true}>
            {ability.name}
          </AnimatedText>
        ))}
      </View>
      <AnimatedText styles={styles.title}>Movements</AnimatedText>
      <View style={styles.bodyColumnContainer}>
        {pokemon.moves.map(({ move }) => (
          <AnimatedText
            styles={styles.body}
            key={`${move.name}+${Math.random()}`}
            capitalize={true}>
            {move.name}
          </AnimatedText>
        ))}
      </View>
      <AnimatedText styles={styles.title}>Base Stats</AnimatedText>
      <View style={styles.bodyColumnContainer}>
        {pokemon.stats.map(stat => (
          <View
            key={`${stat.stat.name}+${Math.random()}`}
            style={styles.bodyNested}>
            <AnimatedText styles={styles.bodyAligned} capitalize>
              {stat.stat.name}
            </AnimatedText>
            <AnimatedText styles={styles.body}>{stat.base_stat}</AnimatedText>
          </View>
        ))}
      </View>
      <View style={styles.safeFooter} />
    </ScrollView>
  );
};

export default Info;
