import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../../constants/theme';

const TabBarIcon = ({source}) => {
  return (
    <View>
      <Image source={source} resizeMode="contain" style={{width: 25}} />
    </View>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({});
