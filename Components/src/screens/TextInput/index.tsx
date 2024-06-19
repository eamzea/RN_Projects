import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header, CustomSwitch, Content } from 'components';
import useForm from 'hooks/useForm';
import { styles } from './styles';
import { globalStyles } from 'styles/global';

const TextInputScreen = () => {
  const { form, onChange, isSuscribed } = useForm({
    name: '',
    email: '',
    phone: '',
    isSuscribed: false,
  });
  const { top } = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView behavior="height">
      <ScrollView>
        <View style={{ ...globalStyles.globalContainer, marginTop: top }}>
          <Header title="Text Input" />
          <TextInput
            style={styles.input}
            placeholder="Enter your information"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'name')}
          />
          <Header title="Text Input" />
          <TextInput
            style={styles.input}
            placeholder="Enter your information"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={value => onChange(value, 'email')}
            keyboardType="email-address"
          />
          <Header title="Text Input" />
          <Content
            content={JSON.stringify(form, null, 5)}
            styles={styles.state}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your information"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'phone')}
            keyboardType="number-pad"
          />
          <View style={styles.column}>
            <Content content="Is Active" styles={styles.text} />
            <CustomSwitch
              isEnabled={isSuscribed}
              toggleSwitch={value => onChange(value, 'isSuscribed')}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TextInputScreen;
