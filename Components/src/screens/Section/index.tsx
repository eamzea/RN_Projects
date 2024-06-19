import React from 'react';
import { View, SectionList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header, Separator, Content } from 'components';
import { styles } from './styles';
import { globalStyles } from 'styles/global';

interface Home {
  home: string;
  data: string[];
}

const home: Home[] = [
  {
    home: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    home: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
    ],
  },
  {
    home: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
    ],
  },
];

const SectionScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{
        ...globalStyles.globalContainer,
        paddingTop: top,
      }}>
      <SectionList
        sections={home}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Content content={item} styles={styles.item} />
        )}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <Header title="Section" />}
        ListFooterComponent={() => (
          <Content
            content={`Total ${home.length}`}
            styles={styles.footerComponent}
          />
        )}
        renderSectionHeader={({ section: { home } }) => (
          <Content content={home} styles={styles.headerItem} />
        )}
        renderSectionFooter={({ section }) => (
          <Content
            content={`Total ${section.data.length}`}
            styles={styles.footerSection}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
};

export default SectionScreen;
