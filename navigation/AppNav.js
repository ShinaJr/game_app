import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React, { useContext } from "react";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { AuthContext } from "../context/AuthContext";

function AppNav() {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="Large" color="#AD40AF" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </View>
  );
}

export default AppNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
