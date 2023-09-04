import {StyleSheet} from 'react-native';

import {responsiveWidth} from 'react-native-responsive-dimensions';
import { theme } from '../../constants/theme';


const styles = StyleSheet.create({
  imageContainer: {
    width: responsiveWidth(15),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  
    
  },
  image:{
    borderRadius: 100,
    width: responsiveWidth(10),
    height: responsiveWidth(10),
  

  },
  innerView:{
    borderRadius: 100,
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    backgroundColor: theme.Colors.HEADER_LOGO_BG_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;
