import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {navigators} from './src/navigators/index';

const App = () => {
  return <navigators.RootStack />;
};

export default App;
