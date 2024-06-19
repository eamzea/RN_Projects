import React, { useEffect, useRef, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/core';
import ImageColors from 'react-native-image-colors';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import { SimplePokemon } from 'interfaces/interfaces';
import { AnimatedCard, AnimatedImg } from 'components/Animated';
import AnimatedText from 'components/Animated/Text';

interface Props {
  pokemon: SimplePokemon;
}

const Card: React.FC<Props> = ({ pokemon }) => {
  const [colors, setColors] = useState<any>({
    primaryColor: 'transparent',
    secondaryColor: 'transparent',
  });
  const navigation = useNavigation();
  const isMounted = useRef(true);

  useEffect(() => {
    ImageColors.getColors(pokemon.picture, { fallback: 'grey' }).then(
      colorsR => {
        let primaryColor, secondaryColor;
        if (colorsR.platform === 'android') {
          primaryColor = colorsR.dominant || 'grey';
          secondaryColor = colorsR.average || 'grey';
        }
        if (colorsR.platform === 'ios') {
          primaryColor = colorsR.background || 'grey';
          secondaryColor = colorsR.detail || 'grey';
        }

        isMounted &&
          setColors({
            primaryColor,
            secondaryColor,
          });
      },
    );

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.dispatch(
          CommonActions.navigate({
            name: 'Details',
            params: {
              simplePokemon: pokemon,
              colors: [colors.primaryColor, colors.secondaryColor],
            },
          }),
        )
      }>
      <AnimatedCard styles={{ ...styles.card }}>
        <LinearGradient
          colors={[colors.primaryColor, colors.secondaryColor]}
          style={styles.gradientContainer}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 2.5, y: 2.5 }}>
          <View style={styles.infoContainer}>
            <AnimatedText styles={styles.title} capitalize={true}>
              {pokemon.name}
            </AnimatedText>
            <AnimatedText styles={styles.subtitle}>#{pokemon.id}</AnimatedText>
          </View>
          <View style={styles.imgContainer}>
            <Image
              source={require('assets/pokebola-white.png')}
              style={styles.pokeImg}
            />
          </View>
        </LinearGradient>
        <AnimatedImg uri={pokemon.picture} styles={styles.img} />
      </AnimatedCard>
    </TouchableOpacity>
  );
};

export default Card;
