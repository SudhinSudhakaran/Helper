import { StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({

  titleText: {
    color: theme.Colors.WHITE_COLOR,
    lineHeight: responsiveHeight(2),
    fontFamily: theme.Fonts.INTER_400,
    fontSize: responsiveFontSize(1.8),

  },
  subTitleText: {
    color: theme.Colors.WHITE_COLOR,
    fontSize: responsiveFontSize(3),
    fontFamily: theme.Fonts.INTER_600,
  },

  mainContainer: {
    flex: 1,
    paddingBottom: responsiveHeight(10)
  },
  innerContainer: {
    width: '98%',
    borderWidth: 1,
    alignSelf: 'center',
    height: responsiveHeight(17),
    borderRadius: responsiveWidth(1.8),
    borderColor: theme.Colors.WHITE_COLOR,
    backgroundColor: theme.Colors.WHITE_COLOR,
    // shadow
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 6,
    shadowRadius: 5.72,
    shadowOpacity: 0.20,
  },
  // ArticleItemComponent styles

  articleTitle: {
    marginLeft: '5%',
    marginTop: responsiveHeight(2),
    fontFamily: theme.Fonts.INTER_700,
    fontSize: responsiveFontSize(2.1),
    color: theme.Colors.OVER_VIEW_TEXT_COLOR,
  },

  articleInnerContainer: {
    padding: '5%',
    width: '100%',
    marginTop: '5%',
    justifyContent: 'center',
    borderRadius: responsiveWidth(2),
    backgroundColor: theme.Colors.ARTICLE_COMPONENT_BG_COLOR,
  },
  articleSubTitle: {
    fontFamily: theme.Fonts.INTER_500,
    color: theme.Colors.HEADER_TITLE_COLOR
  },
  articleInnerImage: {
    width: responsiveWidth(86),
    borderRadius: responsiveWidth(1.5),
    alignSelf: 'center', marginTop: '5%',

  },

  line: {
    height: 1,
    width: '90%',
    marginTop: '4%',
    alignSelf: 'center',
    backgroundColor: theme.Colors.HEADER_BORDER_COLOR,
  },
  dismissText: {
    marginTop: '5%',
    marginLeft: '5%',
    fontFamily: theme.Fonts.INTER_500,
    color: theme.Colors.HEADER_EMAIL_COLOR,
  }
});

export default styles;
