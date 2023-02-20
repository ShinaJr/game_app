import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Home from "../screens/Home";
import Favorite from "../screens/Favorite";
import Cart from "../screens/Cart";
import { Feather, Ionicons } from "@expo/vector-icons";
import GamesDetails from "../screens/GamesDetails";

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Main" screenOptions={{}}>
      <Stack.Screen
        name="Home2"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GamesDetails"
        component={GamesDetails}
        options={({ route }) => ({ title: route.params?.title })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#ad40af" },
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "yellow",
      }}
    >
      <Tab.Screen
        name="Home3"
        component={HomeStack}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: "#ad40af",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: "yellow" },
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
  //   console.log(routeName);
  //   if (routeName == "GamesDetails") {
  //     return "none";
  //   } else {
  //     return "flex";
  //   }

  switch (routeName) {
    case "GamesDetails":
      return "none";
    default:
      return "flex";
  }
};
export default TabNavigator;
