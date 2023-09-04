import {Text, View} from 'react-native';
import React from 'react';
import styles from './Styles';
import HeaderImageComponent from '../headerImage/HeaderImageComponent';
import {theme} from '../../constants/theme';
import {responsiveWidth} from 'react-native-responsive-dimensions';
const OverViewComponent = () => {
  const name = 'Betty Smith';
  const mail = 'bettysmith@gmail.com';
  return (
    <View style={styles.container}>
    <Text>Today's Overview</Text>
    <Text>Today's Overview</Text>
     
    </View>
  );
};

export default OverViewComponent;
