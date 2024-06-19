import React, { useEffect } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { AnimatedCard, AnimatedImg, AnimatedText } from 'components/Animated';
import { RootStackParams } from 'types';
import { styles } from './style';
import usePokemon from 'hooks/usePokemon';
import { Info } from 'components';
import { HeightScreen } from 'styles/global';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

const Details: React.FC<Props> = ({ navigation, route }) => {
  const { simplePokemon, colors } = route.params;
  const { name, id, picture } = simplePokemon;
  const { top } = useSafeAreaInsets();

  const { pokemon, isLoading } = usePokemon(simplePokemon.id);

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <AnimatedCard styles={{ ...styles.card }}>
        <LinearGradient
          colors={[colors[0], colors[1]]}
          style={styles.gradientContainer}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 1.5, y: 1.5 }}>
          <TouchableOpacity
            style={{ marginTop: top > 0 ? top : HeightScreen * 0.025 }}
            onPress={() => navigation.pop()}
            activeOpacity={0.8}>
            <Icon name="arrow-back-outline" size={30} color="white" />
          </TouchableOpacity>
          <View style={styles.imgContainer}>
            <Image
              source={require('assets/pokebola-white.png')}
              style={styles.pokeImg}
            />
            <AnimatedImg uri={picture} styles={styles.img} />
          </View>
          <View style={styles.textContainer}>
            <AnimatedText styles={styles.name} capitalize={true}>
              {name}
            </AnimatedText>
            <AnimatedText styles={styles.id}>#{id}</AnimatedText>
          </View>
        </LinearGradient>
      </AnimatedCard>
      {isLoading ? (
        <View style={styles.activityContainer}>
          <ActivityIndicator color={colors[0]} size="large" />
        </View>
      ) : (
        <Info pokemon={pokemon} />
      )}
    </View>
  );
};

export default Details;
