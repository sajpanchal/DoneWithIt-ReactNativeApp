import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";

function Screen(props) {
  return <SafeAreaView style={Styles.screen}>{props.children}</SafeAreaView>;
}

const Styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "yellow",
    flex: 1,
  },
});

export default Screen;
