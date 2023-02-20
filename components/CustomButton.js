import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ label, onPress }) => {
  return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: "#AD40AF",
          padding: 20,
          borderRadius: 10,
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            alignItems: "center",
            fontFamily: "Roboto_700Bold",
            fontSize: 16,
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
  );
};

export default CustomButton;
