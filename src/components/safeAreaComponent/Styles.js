import {StyleSheet} from 'react-native';
import { theme } from '../../constants/theme';
import { responsiveWidth } from 'react-native-responsive-dimensions';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.WHITE_COLOR,
    paddingHorizontal: responsiveWidth(2.8)
  },
});
