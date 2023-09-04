import { Image, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import styles from './Styles';
import { theme } from '../../constants/theme';
import ExpandableText from './ExpandableText';
const ArticleItemComponent = ({ item }) => {

    const [expand,setExpand ] = useState(false)
    return (
        <View style={styles.articleContainer}>
            <View style={styles.line} />
            <Text style={styles.articleTitle} >{item.title}</Text>
            <View  style={styles.articleInnerContainer}>
            { item.subTitle &&   <Text style={styles.articleSubTitle} >{item.subTitle}</Text>}
                {/* <Text  style={[styles.articleSubTitle,
                {color: item.id === 1 ? theme.Colors.HEADER_EMAIL_COLOR : theme.Colors.HEADER_TITLE_COLOR}]} >{item.description}
           
                 </Text> */}

<ExpandableText text={item.description} id={item.id} />
                <Image source={item.image} style={styles.articleInnerImage} />
                <Text style={styles.dismissText}>Dismiss</Text>
            </View>
          
        </View>
    )
}

export default ArticleItemComponent

