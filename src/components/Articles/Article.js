import { Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import styles from './Styles';
import HeaderImageComponent from '../headerImage/HeaderImageComponent';
import { theme } from '../../constants/theme';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import ArticleItemComponent from './ArticleItemComponent';

const Article = () => {

  const DATA = [
    {
      id: 1,
      title: 'Caregiving Resources',
      subTitle: 'The benefits of Caring for your Loved Ones',
      description: 'Caring for a loved one can be a positive experience',
      image: theme.Images.ARTICLE_IMAGE1,
    },
    {
      id: 2,
      title: 'From the Community',
      description: 'Sandw Ych has your back on how to file & track your legal documents. Make sure you set up these with a loved one soon.Sandw Ych has your back on how to file & track your legal documents. Make sure you set up these with a loved one soon.Sandw Ych has your back on how to file & track your legal documents. Make sure you set up these with a loved one soon.Sandw Ych has your back on how to file & track your legal documents. Make sure you set up these with a loved one soon.',
      image: theme.Images.ARTICLE_IMAGE2,
    }
  ]
  const renderItem = ({ item }) => (
    <ArticleItemComponent item={item} />
  );
  return (

    <View style={styles.mainContainer}>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />

    </View>

  );
};

export default Article;
