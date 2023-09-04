/**
 <---------------------------------------------------------------------------------------------->
 * Purpose: Create HeaderImageComponent
 * Created/Modified By: Sudhin Sudhakaran
 * Created/Modified Date: 04-09-2023
 * Steps:
 * 1. Take source and custom styles as props
 * 2. passing to image component
 <---------------------------------------------------------------------------------------------->
 */
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import styles from './Styles';

const HeaderImageComponent = ({image, customStyles}) => {
  return (
    <View style={styles.imageContainer}>
      <View style={styles.innerView}>
        <Image source={image} style={[styles.image, {...customStyles}]} />
      </View>
    </View>
  );
};

export default HeaderImageComponent;
