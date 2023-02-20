import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
} from "@expo-google-fonts/roboto";
import AuthStack from "./navigation/AuthStack";
import AppStack from "./navigation/AppStack";
import AppNav from "./navigation/AppNav";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  //loading and using the fonts
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_700Bold_Italic,
    Roboto_700Bold,
    Roboto_500Medium_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
