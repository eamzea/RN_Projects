import React from 'react';
import {SafeAreaView} from 'react-native';
// import BoxModelScreen from './src/screens/BoxModelScreen';
// import CounterScreen from './src/screens/CounterScreen';
// import DimensionsScreeen from './src/screens/DimensionsScreeen';
// import HomeScreen from './src/screens/HomeScreen';
// import PositionsScreen from './src/screens/PositionsScreen';
import FlexScreen from './src/screens/FlexScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*
        <HomeScreen />
        <CounterScreen />
        <BoxModelScreen />
        <DimensionsScreeen />
        <PositionsScreen />
       */}
      <FlexScreen />
    </SafeAreaView>
  );
};

export default App;
