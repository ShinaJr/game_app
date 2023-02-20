import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import GamingImg from "../assets/images/misc/gaming.svg";
import { useNavigation } from "@react-navigation/native";

const Main = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 25 }}>
        <Text style={styles.titleText}>GAMEON</Text>
      </View>
      <View style={styles.gameSvg}>
        <GamingImg
          height={300}
          width={300}
          style={{ transform: [{ rotate: "-15deg" }] }}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: "Roboto_500Medium_Italic",
            fontSize: 18,
          }}
        >
          Let's Begin
        </Text>
        <MaterialIcons name="chevron-right" size={30} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontFamily: "Roboto_700Bold",
    fontSize: 30,
    color: "#20315f",
  },
  button: {
    backgroundColor: "#ad40af",
    padding: 20,
    width: "90%",
    borderRadius: 5,
    // height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50,
  },
  gameSvg: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Main;
