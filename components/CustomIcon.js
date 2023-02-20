import { View, Text } from "react-native";
import React from "react";

const CustomIcon = ({ name, size, color, Icon, style }) => {
  return (
    <View>
      <Icon name={name} size={size} color={color} style={style} />
    </View>
  );
};

export default CustomIcon;
