import React from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      blurRadius={10}
      source={require("../assets/background.jpg")}
      resizeMode="cover"
      style={Styles.mainView}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <View style={Styles.logoContainer}>
          <Image
            style={Styles.logo}
            source={require("../assets/logo-red.png")}
          ></Image>
          <Text style={Styles.tagline}>sell what you don't need</Text>
        </View>
      </View>
      <View style={Styles.buttonsContainer}>
        <CustomButton
          type="Login"
          onPress={() => {
            navigation.navigate("Login");
          }}
        ></CustomButton>
        <CustomButton
          type="Register"
          onPress={() => {
            navigation.navigate("Register");
          }}
        ></CustomButton>
      </View>
    </ImageBackground>
  );
}

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  logoContainer: {
    flex: 1,
    top: 80,
    position: "absolute",
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 10,
  },
  tagline: { fontWeight: "600", fontSize: 25 },
  buttonsContainer: {
    width: "100%",
    alignItems: "center",
    padding: 10,
  },
});
