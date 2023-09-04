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
