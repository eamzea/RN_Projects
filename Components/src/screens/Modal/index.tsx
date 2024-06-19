import React, { useState } from 'react';
import { View, Modal, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header, Content } from 'components';
import { globalStyles } from 'styles/global';
import { styles } from './styles';

const ModalScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ ...globalStyles.globalContainer, paddingTop: top }}>
      <Header title="Modal" />
      <Button title="Open Modal" onPress={() => setIsOpen(true)} />
      <Modal visible={isOpen} transparent={true} animationType="slide">
        <View style={{ ...styles.overlay, paddingTop: top * 2 }}>
          <View style={styles.modalCard}>
            <Content content="Modal" />
            <Button title="Close Modal" onPress={() => setIsOpen(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;
