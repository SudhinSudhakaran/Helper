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
flex:1,
paddingBottom: responsiveHeight(10)
    
    
  },
  innerContainer: {
    backgroundColor: theme.Colors.WHITE_COLOR,
  
    borderRadius: responsiveWidth(1.8),

    borderWidth: 1,
    borderColor: theme.Colors.WHITE_COLOR,


 
    width: '98%',
    height: responsiveHeight(17),
    alignSelf: 'center',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity:  0.20,
    shadowRadius: 5.72,
    elevation: 6

  },


  // ArticleItemComponent styles

 articleContainer:{},
 articleTitle:{
  fontFamily: theme.Fonts.INTER_700,
    color: theme.Colors.OVER_VIEW_TEXT_COLOR,
    fontSize: responsiveFontSize(2.1),
    marginLeft: '5%',
    marginTop: responsiveHeight(2)

 },

  articleInnerContainer:{
    backgroundColor:theme.Colors.ARTICLE_COMPONENT_BG_COLOR, 
    width: '100%',
    borderRadius: responsiveWidth(2),
    justifyContent:'center',
    marginTop: '5%',
    padding: '5%'
  },
  articleSubTitle:{
    fontFamily: theme.Fonts.INTER_500,
    color: theme.Colors.HEADER_TITLE_COLOR
  },
  articleInnerImage:{
    width: responsiveWidth(86),
    alignSelf:'center', marginTop: '5%',
    borderRadius:responsiveWidth(1.5),
  
  },
 
  line: {
    height:1,
    backgroundColor: theme.Colors.HEADER_BORDER_COLOR,
    alignSelf: 'center',
    width:'90%',
    marginTop:'4%'
  },
  dismissText:{
    color:theme.Colors.HEADER_EMAIL_COLOR,
    marginLeft: '5%',
    fontFamily: theme.Fonts.INTER_500,
    marginTop:'5%'
  }
});

export default styles;
