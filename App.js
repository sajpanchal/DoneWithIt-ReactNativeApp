import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ViewImage from "./ViewImage";
export default function App() {
  return <ViewImage></ViewImage>;
  /*return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        style={{
          flex: 1,

          width: "100%",
          height: "100%",
        }}
        source={require("./assets/background.jpg")}
      ></Image>
      <View style={{ backgroundColor: "tomato", flex: 0.125, width: "100%" }} />
      <View
        style={{ backgroundColor: "dodgerblue", flex: 0.125, width: "100%" }}
      />
      <View
        style={{
          flex: 0.2,
          top: 80,
          position: "absolute",
        }}
      >
        <Image
          style={{
            width: 100,
            height: 100,
            alignSelf: "center",
          }}
          source={require("./assets/logo-red.png")}
        ></Image>
        <Text>sell what you don't need</Text>
      </View>
    </View>
  );*/
}
