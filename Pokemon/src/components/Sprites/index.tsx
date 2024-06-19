import React from 'react';
import { SvgCssUri } from 'react-native-svg';
import { AnimatedImg, AnimatedText } from 'components/Animated';
import { View, FlatList } from 'react-native';

interface Props {
  flatStyles: any;
  data: any;
  itemContainerStyles: {};
  spriteContainerStyles: {};
  spriteStyles: {};
  spriteDescriptionContainerStyles: {};
  spriteDescriptionStyles: {};
}

const Sprites: React.FC<Props> = ({
  data,
  flatStyles,
  itemContainerStyles,
  spriteContainerStyles,
  spriteStyles,
  spriteDescriptionContainerStyles,
  spriteDescriptionStyles,
}) => {
  return (
    <FlatList
      data={data}
      style={flatStyles}
      keyExtractor={sprite => `${sprite[1]}+${Math.random()}`}
      renderItem={({ item }) => (
        <View style={itemContainerStyles}>
          <View style={spriteContainerStyles}>
            {item[1].includes('svg') ? (
              <SvgCssUri uri={item[1]} width="75%" height="75%" />
            ) : (
              <AnimatedImg uri={item[1]} styles={spriteStyles} />
            )}
          </View>
          <View style={spriteDescriptionContainerStyles}>
            {item[0].split('_').map(txt => (
              <AnimatedText
                capitalize
                styles={spriteDescriptionStyles}
                key={`${txt}+${Math.random()}`}>
                {txt}
              </AnimatedText>
            ))}
          </View>
        </View>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Sprites;
