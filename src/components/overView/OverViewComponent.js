import { Text, View } from 'react-native';
import React from 'react';
import styles from './Styles';
import HeaderImageComponent from '../headerImage/HeaderImageComponent';
import { theme } from '../../constants/theme';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import MoodList from '../moodList/MoodList';
const OverViewComponent = () => {
  const name = 'Betty Smith';
  const mail = 'bettysmith@gmail.com';
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Today's Overview</Text>
      <Text style={styles.subTitleText}>You have devoted <Text style={styles.time}>4 hours</Text>  of care today</Text>

      <View style={styles.mainContainer}>
        <View style={styles.innerContainer} />
          <MoodList />
      
      </View>
    </View>
  );
};

export default OverViewComponent;
