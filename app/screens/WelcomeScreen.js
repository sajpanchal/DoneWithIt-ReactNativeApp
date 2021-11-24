import React from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import CustomButton from "../components/CustomButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
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
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            sell what you don't need
          </Text>
        </View>
      </View>
      <CustomButton type="Login"></CustomButton>
      <CustomButton type="Register"></CustomButton>
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
  },
});
