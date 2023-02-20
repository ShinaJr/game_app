import { View, Text } from "react-native";
import React from "react";
import { SvgWithCss } from "react-native-svg";

const CustomSocialButton = ({ Svg, width, height }) => {
  return (
    <View>
      <Svg width={width} height={height} />
    </View>
  );
};

export default CustomSocialButton;
