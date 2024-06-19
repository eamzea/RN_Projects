import { useDebounce } from 'hooks';
import React, { useEffect, useState } from 'react';
import { View, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { HeightScreen } from 'styles/global';
import { styles } from './styles';

interface Props {
  onDebounce: (value: string) => void;
}

const SearchInput = ({ onDebounce }) => {
  const { top } = useSafeAreaInsets();
  const [textValue, setTextValue] = useState('');
  const debouncedValue = useDebounce(textValue, 500);

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue]);

  return (
    <View
      style={{
        ...styles.mainContainer,
        top: top > 0 ? top : HeightScreen * 0.015,
      }}>
      <View style={styles.container}>
        <TextInput
          placeholder="Search Pokemon"
          style={styles.input}
          underlineColorAndroid="transparent"
          clearButtonMode="while-editing"
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />
        <Icon name="search-outline" size={30} color="#D1D1D1" />
      </View>
    </View>
  );
};

export default SearchInput;
