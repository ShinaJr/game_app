import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import RegistrationSvg from "../assets/images/misc/registration.svg";
import FacebookSvg from "../assets/images/misc/facebook";
import GoogleSvg from "../assets/images/misc/google";
import TwitterSvg from "../assets/images/misc/twitter";
import CustomIcon from "../components/CustomIcon";
import CustomInput from "../components/CustomInput";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import CustomSocialButton from "../components/CustomSocialButton";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useForm } from "react-hook-form";

const RegisterScreen = () => {
  const navigation = useNavigation();

  //email validation using the rfc 5322 format
  const EMAIL_REGEX = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  //handling the form
  const {
    control,
    handleSubmit,
    watch,
    formState: {error },
  } = useForm({
    defaultValues: {
      Fullname: "John smith",
    },
  });

  //now watching the password field to see if it corresponds to the repeat password field by getting the value of the password field using watch from react hook form...
  const pwd = watch("Password");

  //handlingSubmit
  const onRegisterPress = () => {
    navigation.navigate("Login");
  };

  //state for date picker
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  //creating another state doblabel to show the label of the date that is picked
  const [dobLabel, setDobLabel] = useState("Date of Birth");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    setDobLabel(currentDate.toDateString());
  };
  const showMode = (currentMode) => {
    if (Platform.OS === "android") {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 25 }}
      >
        <View style={{ alignItems: "center" }}>
          <RegistrationSvg
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
          Register
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
        <Text
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: 30,
            paddingTop: 15,
            fontFamily: "Roboto_400Regular",
          }}
        >
          Or Register with email...
        </Text>

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
            name="person-outline"
            Icon={Ionicons}
            size={22}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <CustomInput
            placeholder="Full Name"
            name="Fullname"
            control={control}
            style={{ flex: 1, paddingVertical: 0 }}
            rules={{
              required: "Fullname is required",
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
            style={{ flex: 1, paddingVertical: 0 }}
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
            placeholder="Password"
            control={control}
            name="Password"
            style={{ flex: 1, paddingVertical: 0, marginRight: 190 }}
            secureTextEntry={true}
            inputType="password"
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
            placeholder="Confirm Password"
            name="Confirm Password"
            control={control}
            style={{ flex: 1, paddingVertical: 0, marginRight: 190 }}
            secureTextEntry={true}
            inputType="password"
            //now we will compare the value of this repeat password field and see if it corresponds with the pwd i.e the value of the password field using a validation function which receives a value which returns true if the value is valid and false otherwise which is most times a validation error message...
            rules={{
              required: "Password is required",
              validate: (value) => value === pwd || "passwords do not match",
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
            alignItems: "center",
          }}
        >
          <CustomIcon
            Icon={Ionicons}
            name="calendar-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          {/* for the calendar we'll use a button i.e touchable opacity instead of an input field */}
          <TouchableOpacity
            onPress={() => {
              setShow(true);
            }}
            style={{ flex: 1 }}
          >
            <Text style={{ marginTop: 5, marginLeft: 5, color: "#666" }}>
              {dobLabel}
            </Text>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              onChange={onChange}
              showDatepicker={showDatepicker}
              maximumDate={new Date(2007, 1, 1)}
              minimumDate={new Date(1960, 1, 1)}
              style={{ flex: 1 }}
            />
          )}
        </View>
        <CustomButton
          label={"Register"}
          onPress={handleSubmit(onRegisterPress)}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
            paddingVertical: 15,
          }}
        >
          <Text style={{ marginRight: 5, fontFamily: "Roboto_400Regular" }}>
            Already Registered?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={{ fontFamily: "Roboto_700Bold", color: "#AD40AF" }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
