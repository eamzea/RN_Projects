import { Content, CustomIcon, Header } from 'components';
import { ThemeContext } from 'context/theme';
import React, { useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from 'styles/global';
import { styles } from './styles';

const ThemeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { themeDispatch, themeActions } = useContext(ThemeContext);

  return (
    <View style={{ ...globalStyles.globalContainer, paddingTop: top }}>
      <Header title="Select Theme" />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.themeBtn}
          activeOpacity={0.8}
          onPress={() => themeDispatch(themeActions.setLightTheme())}>
          <CustomIcon name="sunny-outline" size={30} color="white" />
          <Content content="Light" styles={styles.fBText} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.themeBtn}
          activeOpacity={0.8}
          onPress={() => themeDispatch(themeActions.setDarkTheme())}>
          <CustomIcon name="moon-outline" size={30} color="white" />
          <Content content="Dark" styles={styles.fBText} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ThemeScreen;
