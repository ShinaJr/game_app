import { useNavigation } from "@react-navigation/native";
import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  //login Function
  const Login = () => {
    setIsLoading(true);
    setUserToken("zebra");
    //implementing async storage
    AsyncStorage.setItem("userToken", "Zebra");
    setIsLoading(false);
  };
  //logout function
  const Logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  };

  //creating another function to check if the user is currently logged In
  const IsLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      setUserToken(userToken);
      setIsLoading(false);
    } catch (e) {
      console.log(`isLogged In error ${e}`);
    }
  };

  //using a useEffect hook to call the isLoggedIn to check if the userIsLogged in immediately te page renders/mounts on the screen
  useEffect(() => {
    IsLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ Login, Logout, }}>
      {children}
    </AuthContext.Provider>
  );
};
