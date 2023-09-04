import React from 'react';
import {styles} from './Styles';
import {theme} from '../../constants/theme';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView as SafeAreaViewRN} from 'react-native-safe-area-context';

const SafeAreaView = ({children, safeAreaStyle}) => {
  return (
    <SafeAreaViewRN
      style={[styles.container, {...safeAreaStyle}]}
      //     edges={edges}
    >
      {children}
    </SafeAreaViewRN>
  );
};

export default SafeAreaView;
