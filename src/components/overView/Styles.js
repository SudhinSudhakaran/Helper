import { StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.Colors.WHITE_COLOR,
    // height: responsiveHeight(10),
    width: '100%',
    marginTop:responsiveHeight(3),
  
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },


titleText: {
    fontFamily: theme.Fonts.INTER_700,
    color: theme.Colors.OVER_VIEW_TEXT_COLOR,
    fontSize: responsiveFontSize(1.8),
    lineHeight: responsiveHeight(2),
    paddingLeft: responsiveWidth(4)
  },
 subTitleText: {
    fontFamily: theme.Fonts.INTER_400,
    color: theme.Colors.HEADER_EMAIL_COLOR,
    fontSize: responsiveFontSize(1.8),
    lineHeight: responsiveHeight(2),
    paddingLeft: responsiveWidth(4)
  },
  time:{
    fontFamily: theme.Fonts.INTER_700,
    color: theme.Colors.HEADER_EMAIL_COLOR,
    fontSize: responsiveFontSize(1.8),
    lineHeight: responsiveHeight(3),
  },
  mainContainer: {
    backgroundColor: theme.Colors.OVER_VIEW_BG_COLOR,
    width: '100%',
    height: responsiveHeight(20),
    padding: responsiveHeight(2),
    borderRadius: responsiveWidth(3),
    marginTop: responsiveWidth(3),
    alignItems:'center',
    justifyContent: 'center',
  },
  innerContainer: {
    backgroundColor: theme.Colors.WHITE_COLOR,
    flex:1,
    borderRadius: responsiveWidth(1.8),
    opacity: 0.25,
    borderWidth: 1,
    borderColor: theme.Colors.WHITE_COLOR,
   
    position: 'absolute',
    width: '97%',
    height: responsiveHeight(15),
    alignSelf: 'center',
  },
  innerContainer1: {
    backgroundColor:'transparent',
    borderRadius: responsiveWidth(1.8),
    borderWidth: 1,
    borderColor: theme.Colors.WHITE_COLOR,
    position: 'absolute',
  
    width: '97%',
    height: responsiveHeight(15),
    alignSelf: 'center',
 
  },
});

export default styles;
