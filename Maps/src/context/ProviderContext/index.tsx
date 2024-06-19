import React, { createContext, useState } from 'react';
import { PROVIDER_DEFAULT } from 'react-native-maps';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export interface ProviderState {
  provider: 'google' | null | undefined;
  isSet: boolean;
}

type ProviderContextProps = {
  provider: ProviderState;
  configProvider: (customProvider: 'google' | null | undefined) => void;
};

export const providerInitialState = {
  provider: PROVIDER_DEFAULT,
  isSet: false,
};

export const ProviderContext = createContext({} as ProviderContextProps);

const ProviderProvider: React.FC<Props> = ({ children }) => {
  const [provider, setProvider] = useState(providerInitialState);

  const configProvider = (customProvider: any) => {
    setProvider({ provider: customProvider, isSet: true });
  };

  return (
    <ProviderContext.Provider value={{ provider, configProvider }}>
      {children}
    </ProviderContext.Provider>
  );
};

export default ProviderProvider;
