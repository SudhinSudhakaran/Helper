import { StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.Colors.WHITE_COLOR,
    height: responsiveHeight(10),
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },


titleText: {
    fontFamily: theme.Fonts.INTER_500,
    color: theme.Colors.HEADER_TITLE_COLOR,
    fontSize: responsiveFontSize(1.8),
    lineHeight: responsiveHeight(2),
  },
 subTitleText: {
    fontFamily: theme.Fonts.INTER_400,
    color: theme.Colors.HEADER_EMAIL_COLOR,
    fontSize: responsiveFontSize(1.8),
    lineHeight: responsiveHeight(2),
  }
});

export default styles;
