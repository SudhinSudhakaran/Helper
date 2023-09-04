
/**
 <---------------------------------------------------------------------------------------------->
 * Purpose:  Header Component
 * Created/Modified By: Sudhin Sudhakaran
 * Created/Modified Date: 04-09-2023
 * Steps:
 * 1. Create UI
 * 2. Use styles from Styles.js
 <---------------------------------------------------------------------------------------------->
 */
import {Text, View} from 'react-native';
import React from 'react';
import styles from './Styles';
import HeaderImageComponent from '../headerImage/HeaderImageComponent';
import {theme} from '../../constants/theme';
import {responsiveWidth} from 'react-native-responsive-dimensions';
const Header = () => {
  const name = 'Betty Smith';
  const mail = 'bettysmith@gmail.com';
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <HeaderImageComponent image={theme.Images.DUMMY_USER} />
        <View style={styles.userInfoContainer}>
          <Text style={styles.userNameText}>{name}</Text>
          <Text style={styles.mailText}>{mail}</Text>
        </View>
        <HeaderImageComponent
          image={theme.Images.LOGO}
          customStyles={{width: responsiveWidth(6), height: responsiveWidth(6)}}
        />
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default Header;
