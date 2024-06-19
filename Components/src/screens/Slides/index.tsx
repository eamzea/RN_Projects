import React, { useContext, useState } from 'react';
import { View, Image, TouchableOpacity, Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import useAnimation from 'hooks/useAnimation';
import { items, Slide } from 'interfaces';
import { globalStyles, widthScreen } from 'styles/global';
import { styles } from './styles';
import { CustomIcon, Content } from 'components';
import { ThemeContext } from 'context/theme';

const SlidesScreen = ({ navigation }: any) => {
  const { opacity, fadeIn } = useAnimation();
  const [activeSlide, setActiveSlide] = useState(0);
  const { top } = useSafeAreaInsets();
  const {
    theme: {
      colors: { primary },
    },
  } = useContext(ThemeContext);

  const renderItem = (item: Slide) => (
    <View style={styles.cardContainer}>
      <Image source={item.img} style={styles.img} />
      <View style={styles.textContainer}>
        <Content content={item.title} styles={styles.title} />
        <Content content={item.desc} styles={styles.content} />
      </View>
    </View>
  );

  return (
    <View
      style={{
        paddingVertical: top,
        ...globalStyles.globalContainer,
      }}>
      <Carousel
        // ref={c => {
        //   this._carousel = c;
        // }}
        data={items}
        renderItem={({ item }) => renderItem(item)}
        sliderWidth={widthScreen}
        itemWidth={widthScreen}
        onSnapToItem={slideIndex => {
          slideIndex === items.length - 1 && fadeIn(1, 500);
          setActiveSlide(slideIndex);
        }}
      />
      <View style={styles.footer}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeSlide}
          dotStyle={{ ...styles.paginationDot, backgroundColor: primary }}
          inactiveDotStyle={{
            ...styles.paginationInactiveDot,
            backgroundColor: primary,
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
        {activeSlide === items.length - 1 && (
          <Animated.View style={{ opacity }}>
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: primary }}
              activeOpacity={0.75}
              onPress={() => navigation.navigate('Home')}>
              <Content content="Log in" styles={styles.textButton} />
              <CustomIcon
                name="chevron-forward-outline"
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </View>
  );
};

export default SlidesScreen;
