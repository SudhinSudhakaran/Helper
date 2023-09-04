import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Components } from '../../components';
import styles from './Styles'
import { theme } from '../../constants/theme';
const DashBoard = () => {
  return (
    <Components.SafeAreaView>
      <View style={styles.container}>
        <Components.Header />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}>
          <Components.OverViewComponent />
          <Components.UsersGoals />
          <Components.PharmacyDetails />
          <Components.Article />
        </ScrollView>
      </View>
    </Components.SafeAreaView>

  )
}

export default DashBoard

