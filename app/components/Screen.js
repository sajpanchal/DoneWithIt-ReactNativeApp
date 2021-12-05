import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";

function Screen(props) {
  return (
    <SafeAreaView style={[Styles.screen, props.style]}>
      <View style={props.style}>{props.children}</View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
