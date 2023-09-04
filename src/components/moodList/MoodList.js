import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import styles from './Styles'
import { theme } from '../../constants/theme'
const MoodList = () => {


  const DATA = [
    { day: 'sun', checked: true },
    { day: 'mon', checked: false },
    { day: 'tue', checked: false },
    { day: 'wed', checked: false },
    { day: 'thu', checked: false },
    { day: 'fri', checked: false },
    { day: 'sat', checked: false },
  ]


  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.dayText}>{item?.day.toUpperCase()}</Text>
        <Image
         source={item.checked ?
          theme.Images.YELLOW_SMILE 
          : theme.Images.CLOCK_ICON} 
          style={styles.image} />


      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Betty's Mood this Week</Text>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default MoodList

