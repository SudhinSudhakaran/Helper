import { Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import styles from './Styles';
import HeaderImageComponent from '../headerImage/HeaderImageComponent';
import { theme } from '../../constants/theme';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const PharmacyDetails = () => {


  const ActionButtons = ({ image, title }) => {

    return (
      <View style={styles.buttonContainer}>
        <Image style={styles.buttonImage} source={image} />
        <TouchableOpacity style={styles.button} >
          <Text style={[styles.buttonText, { color: title === 'Directions' ? theme.Colors.DIRECTIONS_LINK_COLOR : theme.Colors.BLACK_COLOR }]} >{title}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (

    <View style={styles.mainContainer}>
      <View style={styles.innerContainer} >
        <View style={styles.firstContainer}>
          <View style={{ width: responsiveWidth(10), }}>
            <Image source={theme.Images.RX_LOGO} style={{ tintColor: theme.Colors.RED_COLOR }} />
          </View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.pharmacyText} >Pharmacy</Text>
              <Image source={theme.Images.PHARMACY_LOGO} style={{ marginLeft: 5 }} />
            </View>
            <Text style={styles.addressText}>120 W Slaughter L, Austin, TX 78744</Text>
          </View>
          <View style={{ width: responsiveWidth(10), }}>
            <TouchableOpacity />
          </View>
        </View>

        <View style={styles.secondContainer}>
          <ActionButtons image={theme.Images.PHONE_ICON} title={'Call'} />
          <ActionButtons image={theme.Images.MAP_ICON} title={'Directions'} />

        </View>





      </View>
    </View>

  );
};

export default PharmacyDetails;
