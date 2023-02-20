import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const CustomSwitch = ({ selectionMode, option1, option2, onSelectSwitch }) => {
  const [getSelectionMode, setSelectionMode] = useState(setSelectionMode);

  const updateSwitchData = (value) => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };
  return (
    <View style={styles.customSwitch}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode === 1 ? "#ad40af" : "#e4e4e4",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: getSelectionMode === 1 ? "#e4e4e4" : "#ad40af",
            fontSize: 14,
            fontFamily: "Roboto_500Medium",
          }}
        >
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={2}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode === 2 ? "#ad40af" : "#e4e4e4",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: getSelectionMode === 2 ? "#e4e4e4" : "#ad40af",
            fontSize: 14,
            fontFamily: "Roboto_500Medium",
          }}
        >
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  customSwitch: {
    height: 44,
    flexDirection: "row",
    backgroundColor: "#e4e4e4",
    borderRadius: 10,
    borderColor: "#ad40af",
    justifyContent: "center",
  },
});
