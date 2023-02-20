import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
// import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Messages from "../screens/Messages";
import Moments from "../screens/Moments";
import Settings from "../screens/Settings";
import CustomDrawer from "../components/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import TabNavigator from "./TabNavigator";


const AppStack = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor:"#aa18ea",
          drawerActiveTintColor:"#fff",
          drawerInactiveTintColor:"#333",
          drawerLabelStyle: { marginLeft: -25, fontFamily:"Roboto_500Medium", fontSize: 15}
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={TabNavigator}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="person-outline" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Messages"
          component={Messages}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Moments"
          component={Moments}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="timer-outline" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="settings-outline" size={24} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
