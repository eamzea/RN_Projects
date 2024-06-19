import React, { useState } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CustomSwitch, Header, Content } from 'components';
import { styles } from './styles';
import { globalStyles } from 'styles/global';

const SwitchScreen = () => {
  const [options, setOptions] = useState({
    isActive: false,
    isReal: true,
    isGod: false,
  });
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ ...globalStyles.globalContainer, paddingTop: top }}>
      <Header title="Switches" />
      <View style={styles.row}>
        <View style={styles.column}>
          <Content content="Is Active" styles={styles.text} />
          <CustomSwitch
            isEnabled={options.isActive}
            toggleSwitch={() =>
              setOptions({ ...options, isActive: !options.isActive })
            }
          />
        </View>
        <View style={styles.column}>
          <Content content="Is Active" styles={styles.text} />
          <CustomSwitch
            isEnabled={options.isReal}
            toggleSwitch={() =>
              setOptions({ ...options, isReal: !options.isReal })
            }
            color="#E36397"
          />
        </View>
        <View style={styles.column}>
          <Content content="Is God" styles={styles.text} />
          <CustomSwitch
            isEnabled={options.isGod}
            toggleSwitch={() =>
              setOptions({ ...options, isGod: !options.isGod })
            }
          />
        </View>
      </View>
      <Content content={JSON.stringify(options, null, 5)} />
    </View>
  );
};

export default SwitchScreen;
