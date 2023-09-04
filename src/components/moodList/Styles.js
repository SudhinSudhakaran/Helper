import { StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
container:{
    width: '97%',
    height: responsiveHeight(15),
    padding:'5%'
},
titleText:{
    color: theme.Colors.OVER_VIEW_TITLE_COLOR,
    fontFamily: theme.Fonts.INTER_400,
    fontSize: responsiveFontSize(1.8),
},
itemContainer:{
    width: responsiveWidth(9.5),
    height:responsiveHeight(7.5),
    backgroundColor: theme.Colors.WHITE_COLOR,
    marginRight: responsiveWidth(1.5),
    borderRadius: 5, 
    alignItems:'center'
},
dayText:{
    color: theme.Colors.OVER_VIEW_TITLE_COLOR,
    fontFamily: theme.Fonts.INTER_600,
    fontSize: responsiveFontSize(1.6),
    marginTop:'6%'
},
image:{
    
}

});

export default styles;
