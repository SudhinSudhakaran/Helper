import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import {theme} from '../../constants/theme';
import ExpandableText from './ExpandableText';
const ArticleItemComponent = ({item}) => {
  return (
    <View style={styles.articleContainer}>
      <View style={styles.line} />
      <Text style={styles.articleTitle}>{item.title}</Text>
      <View style={styles.articleInnerContainer}>
        {item.subTitle && (
          <Text style={styles.articleSubTitle}>{item.subTitle}</Text>
        )}
        <ExpandableText text={item.description} id={item.id} />
        <Image source={item.image} style={styles.articleInnerImage} />
        <Text style={styles.dismissText}>Dismiss</Text>
      </View>
    </View>
  );
};

export default ArticleItemComponent;
