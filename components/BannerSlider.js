import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { windowWidth } from "../utils/Dimensions";

const BannerSlider = ({ data }) => {
  return (
    <View style={styles.bannerItem}>
      <Image
        source={data.image}
        style={{ width: 300, height: 150, borderRadius: 10 }}
      />
    </View>
  );
};

export default BannerSlider;

const styles = StyleSheet.create({
  bannerItem: {
    marginRight: 20,
    borderRadius: 10,
  },
});
