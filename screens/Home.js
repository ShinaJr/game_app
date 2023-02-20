import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Roboto_700Bold } from "@expo-google-fonts/roboto";
import { freeGames, paidGames, sliderData } from "../model/data";
import BannerSlider from "../components/BannerSlider";
import { windowWidth } from "../utils/Dimensions";
import CustomSwitch from "../components/CustomSwitch";
import ListItem from "../components/ListItem";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const Home = () => {
  //we'll create a state to determine what content should be rendered/update when a particular button is pressed
  const [gamesTab, setGamesTab] = useState(1);

  //The value is passed from the update switch function in the customSwitch.js
  //this will determine which button has been pressed
  const onSelectSwitch = (value) => {
    //updating the content when a button is switched/pressed
    setGamesTab(value);
  };

 const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ padding: 25 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text style={{ fontFamily: "Roboto_500Medium", fontSize: 16 }}>
            Hello, Shina Lasisi
          </Text>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
          >
            <ImageBackground
              source={require("../assets/images/user-profile.jpg")}
              style={{ width: 35, height: 35 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: 8,
            borderColor: "#c6c6c6",
            borderWidth: 1,
            alignItems: "center",
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}
        >
          <MaterialIcons name="search" size={25} color="#c6c6c6" />
          <TextInput
            placeholder="Search"
            style={{ flex: 1, color: "#c6c6c6" }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <Text style={{ fontFamily: "Roboto_500Medium", fontSize: 16 }}>
            Upcoming Games
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "#0aada8" }}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bannerSliderWrapper}>
          <FlatList
            horizontal={true}
            data={sliderData}
            renderItem={({ item }) => <BannerSlider data={item} />}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            legacyImplementation={false}
            contentContainerStyle={{
              marginRight: 10,
            }}
          />
        </View>
        <View style={{ marginVertical: 20 }}>
          <CustomSwitch
            selectionMode={1}
            option1="Free to play"
            option2="Paid games"
            onSelectSwitch={onSelectSwitch}
          />
        </View>
        {gamesTab === 1 &&
          freeGames.map((item) => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              // onPress={() => {
              //   navigation.navigate("GamesDetails", {
              //     title: item.title,
              //     id: item.id,
              //   });
              // }}
            />
          ))}
        {gamesTab === 2 &&
          paidGames.map((item) => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              // onPress={() => {
              //   navigation.navigate("GamesDetails", {
              //     title: item.title,
              //     id: item.id,
              //   });
              // }}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bannerSliderWrapper: {
    marginTop: 10,
    borderRadius: 10,
    width: windowWidth - 30,
  },
});
