import React, { useContext } from 'react';
import { View, Text, Modal } from 'react-native';
import { styles } from './styles';
import { Button } from 'components';
import { ProviderContext } from 'context/ProviderContext';
import { PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';

interface Props {
  isOpen: boolean;
}

const ModalProvider: React.FC<Props> = ({ isOpen }) => {
  const { configProvider } = useContext(ProviderContext);

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={isOpen}>
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <Text style={styles.title}>Before to Start</Text>
            <Text style={styles.body}>
              Which map provider would you like to use?
            </Text>
            <View style={styles.buttonContainer}>
              <Button
                hasStyles
                styles={styles.button}
                onPress={() => configProvider(PROVIDER_GOOGLE)}>
                <Text>Google</Text>
              </Button>
              <Button
                hasStyles
                styles={styles.button}
                onPress={() => configProvider(PROVIDER_DEFAULT)}>
                <Text>iOS</Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalProvider;
