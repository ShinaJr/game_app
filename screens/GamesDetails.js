import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";

const GamesDetails = ({ navigation, route }) => {
  const data = route.params;
  //   useLayoutEffect((route) => {
  //     navigation.setOptions({
  //       title: data.title,
  //     });
  //   }, []);
  return (
    <View style={styles.container}>
      <Text>GamesDetails</Text>
      <Text>{data.title}</Text>
    </View>
  );
};

export default GamesDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
