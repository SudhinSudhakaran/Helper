import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { theme } from '../../constants/theme';
const ExpandableText = ({ text, id }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <View>
      <Text numberOfLines={expanded ? undefined : 2} style={[styles.articleSubTitle,
      { color: id === 1 ? theme.Colors.HEADER_EMAIL_COLOR : theme.Colors.HEADER_TITLE_COLOR }]}>{text}</Text>
      {!expanded && (
         id === 2 && <TouchableOpacity onPress={toggleExpansion}>
          <Text style={{
            fontFamily: theme.Fonts.INTER_500,
            color: theme.Colors.READ_MORE_COLOR
          }}>Read More...</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ExpandableText;