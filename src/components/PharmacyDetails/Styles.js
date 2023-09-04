import { StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({

  titleText: {
    fontFamily: theme.Fonts.INTER_400,
    color: theme.Colors.WHITE_COLOR,
    fontSize: responsiveFontSize(1.8),
    lineHeight: responsiveHeight(2),

  },
  subTitleText: {
    fontFamily: theme.Fonts.INTER_600,
    color: theme.Colors.WHITE_COLOR,
    fontSize: responsiveFontSize(3),
    // lineHeight: responsiveHeight(2),


  },

  mainContainer: {
    // backgroundColor: theme.Colors.WHITE_COLOR,
    width: responsiveWidth(93),
    height: responsiveHeight(18),

    borderRadius: responsiveWidth(3),
    marginTop: responsiveWidth(4),
alignSelf:'center'




  },
  innerContainer: {
    backgroundColor: theme.Colors.WHITE_COLOR,

    borderRadius: responsiveWidth(1.8),

    borderWidth: 1,
    borderColor: theme.Colors.WHITE_COLOR,

    padding: '5%',

    width: '100%',
    height: responsiveHeight(15),
    alignSelf: 'center',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 6.72,
    elevation: 6

  },
  firstContainer: {
    flexDirection: 'row',
    alignItems: 'center'

  },
  secondContainer: {
    flexDirection: 'row',
marginTop:responsiveHeight(1),
paddingLeft: '15%'

  },
  addressText: {
    fontFamily: theme.Fonts.INTER_400,
    color: theme.Colors.HEADER_EMAIL_COLOR,
    fontSize: responsiveFontSize(1.8),

  },
  pharmacyText: {
    fontFamily: theme.Fonts.INTER_500,
    color: theme.Colors.OVER_VIEW_TEXT_COLOR,
    fontSize: responsiveFontSize(1.8),
   

  },

  buttonContainer: {
    flexDirection:'row',
    width: '30%'
  
  },
  buttonImage: {},
  button: {},
  buttonText: {
    fontFamily: theme.Fonts.INTER_400,
    // color: theme.Colors.BLACK_COLOR,
    fontSize: responsiveFontSize(1.8),
    textDecorationLine:'underline',
    marginLeft:8
  }

});

export default styles;
