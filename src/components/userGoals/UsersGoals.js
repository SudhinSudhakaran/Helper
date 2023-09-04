import { Text, View } from 'react-native';
import React from 'react';
import styles from './Styles';
import HeaderImageComponent from '../headerImage/HeaderImageComponent';
import { theme } from '../../constants/theme';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const UsersGoals = () => {

  return (

    <View style={styles.mainContainer}>
      <View style={styles.innerContainer} />
        <View style={{opacity:1,zIndex:10}}>
          <Text style={styles.titleText} >Betty's Goals</Text>
          <Text style={styles.subTitleText} >5/7 Goals Met</Text>
        </View>

     
    </View>

  );
};

export default UsersGoals;
