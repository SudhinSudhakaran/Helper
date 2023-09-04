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
  line: {
    height:1,
    backgroundColor: theme.Colors.HEADER_BORDER_COLOR,
    alignSelf: 'center',
    width:'90%'
  },
  userInfoContainer: { flex: 1,justifyContent:'center' },
  userNameText: {
    fontFamily: theme.Fonts.INTER_500,
    color: theme.Colors.HEADER_TITLE_COLOR,
    fontSize: responsiveFontSize(1.8),
    lineHeight: responsiveHeight(2),
  },
  mailText: {
    fontFamily: theme.Fonts.INTER_400,
    color: theme.Colors.HEADER_EMAIL_COLOR,
    fontSize: responsiveFontSize(1.8),
    lineHeight: responsiveHeight(2),
  }
});

export default styles;
