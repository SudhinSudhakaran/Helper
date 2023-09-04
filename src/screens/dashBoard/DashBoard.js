import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { components } from '../../components';
import styles from './Styles'
import { theme } from '../../constants/theme';
const DashBoard = () => {
  return (
    <components.SafeAreaView>
      <View style={styles.container}>
        <components.Header />
      </View>
    </components.SafeAreaView>

  )
}

export default DashBoard

