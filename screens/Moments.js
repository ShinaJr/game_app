import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Moments = () => {
  return (
    <View style={styles.container}>
      <Text>Moments</Text>
    </View>
  )
}

export default Moments

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: "center",
    }
})