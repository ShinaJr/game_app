import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import LoginSvg from "../assets/images/misc/login.svg";
import FacebookSvg from "../assets/images/misc/facebook";
import GoogleSvg from "../assets/images/misc/google";
import TwitterSvg from "../assets/images/misc/twitter";
import CustomIcon from "../components/CustomIcon";
import CustomInput from "../components/CustomInput";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import CustomSocialButton from "../components/CustomSocialButton";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import { useForm } from "react-hook-form";
import { AuthContext, AuthProvider } from "../context/AuthContext";

const LoginScreen = () => {
  const navigation = useNavigation();

  //email validation using the rfc 5322 format
  const EMAIL_REGEX = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  //working on handling the form with the react form hook instead of states
  const {
    control,
    handleSubmit,
    formState: { error },
  } = useForm();

  //handling the pressed
  const onLoginPress = () => {
    navigation.navigate("Home");
  };

  //getting the values from the context provider using the useContext hook
  const {Login} = useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: "center" }}>
          <LoginSvg
            width={300}
            height={300}
            style={{ transform: [{ rotate: "-5deg" }] }}
          />
        </View>
        <Text
          style={{
            fontFamily: "Roboto_500Medium",
            fontSize: 28,
            color: "#333",
            marginBottom: 30,
          }}
        >
          Login
        </Text>

        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1, //for bottom underline
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <CustomIcon
            name="alternate-email"
            Icon={MaterialIcons}
            size={22}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <CustomInput
            placeholder="Email ID"
            name="Email"
            control={control}
            style={{ paddingVertical: 0 }} //flex:1 makes the text to take up all the available space..
            keyboardType="email-address"
            rules={{
              required: "Email is required",
              pattern: {
                value: EMAIL_REGEX,
                message: "email is invalid",
              },
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <CustomIcon
            name="ios-lock-closed-outline"
            Icon={Ionicons}
            size={22}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <CustomInput
            name="Password"
            control={control}
            placeholder="Password"
            style={{ paddingVertical: 0, marginRight: 190 }}
            secureTextEntry={true}
            InputType="Password"
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              maxLength: {
                value: 12,
                message: "Password should be max 12 characters long",
              },
            }}
          />
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ color: "#AD40AF", fontFamily: "Roboto_700Bold" }}>
              Forgot?
            </Text>
          </TouchableOpacity>
        </View>
        <CustomButton label={"Login"} onPress={handleSubmit(Login && onLoginPress)} />
        <Text
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: 30,
            fontFamily: "Roboto_400Regular",
            marginBottom: 30,
          }}
        >
          Or Login With ...
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <CustomSocialButton Svg={FacebookSvg} width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <CustomSocialButton Svg={TwitterSvg} width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <CustomSocialButton Svg={GoogleSvg} width={24} height={24} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <Text style={{ marginRight: 5, fontFamily: "Roboto_400Regular" }}>
            New to the App?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={{ fontFamily: "Roboto_700Bold", color: "#AD40AF" }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
