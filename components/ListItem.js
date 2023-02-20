import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { windowWidth } from "../utils/Dimensions";
import { useNavigation } from "@react-navigation/native";

const ListItem = ({ photo, title, subTitle, isFree, price, onPress }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 40,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Image
            source={photo}
            style={{ width: 55, height: 55, borderRadius: 10, marginRight: 8 }}
          />
        </TouchableOpacity>

        <View style={{ width: windowWidth - 220 }}>
          <Text
            numberOfLines={1}
            style={{
              color: "#333",
              fontFamily: "Roboto_500Medium",
              fontSize: 14,
            }}
          >
            {subTitle}
          </Text>
          <Text
            style={{
              color: "#333",
              fontFamily: "Roboto_500Medium",
              fontSize: 14,
              textTransform: "uppercase",
            }}
          >
            {title}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#0aada8",
          padding: 10,
          width: 100,
          borderRadius: 10,
        }}
        onPress={() => {
          navigation.navigate("GamesDetails", { title, id });
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontFamily: "Roboto_500Medium",
            fontSize: 14,
          }}
        >
          {isFree === "Yes" && "play"}
          {isFree === "No" && price}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
