import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
export default function WelcomeScreen() {
  return (
    <View style={Styles.mainView}>
      <Image
        style={Styles.image}
        source={require("../assets/background.jpg")}
      ></Image>
      <View style={Styles.loginButton} />
      <View style={Styles.registerButton} />
      <View style={Styles.logoContainer}>
        <Image
          style={Styles.logo}
          source={require("../assets/logo-red.png")}
        ></Image>
        <Text>sell what you don't need</Text>
      </View>
    </View>
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
  loginButton: {
    backgroundColor: "tomato",
    flex: 0.125,
    width: "100%",
  },
  registerButton: {
    backgroundColor: "dodgerblue",
    flex: 0.125,
    width: "100%",
  },
  logoContainer: {
    flex: 0.2,
    top: 80,
    position: "absolute",
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
});
