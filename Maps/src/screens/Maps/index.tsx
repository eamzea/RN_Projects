import React, { useContext } from 'react';
import { View, Platform } from 'react-native';
import { Map, ModalProvider } from 'components';
import { ProviderContext } from 'context/ProviderContext';

const Maps = () => {
  const {
    provider: { isSet },
  } = useContext(ProviderContext);

  return (
    <View style={{ flex: 1 }}>
      <Map />
      {!isSet && Platform.OS === 'ios' && <ModalProvider isOpen={!isSet} />}
    </View>
  );
};

export default Maps;
