import React from 'react';

import StackNavigator from 'navigator/StackNavigator';
import { ThemeProvider } from 'context';

const App = () => {
  return (
    <ThemeProvider>
      <StackNavigator />
    </ThemeProvider>
  );
};

export default App;
