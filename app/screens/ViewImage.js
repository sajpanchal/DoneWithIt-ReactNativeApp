import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colors from "../config/colors";
export default function ViewImage() {
  return (
    <View style={styles.mainView}>
      <View style={styles.bannerView}>
        <View style={styles.imagePickerView}>
          <View style={styles.closeIcon}></View>
          <View style={styles.deleteIcon}></View>
        </View>
      </View>
      <Image style={styles.imageView} source={require("../assets/chair.jpg")} />
      <View style={styles.bannerView}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainView: { flex: 1 },
  bannerView: {
    flex: 0.2,
    backgroundColor: colors.black,
    flexDirection: "row",
    justifyContent: "center",
  },
  imagePickerView: {
    flex: 0.9,
    backgroundColor: colors.black,
    flexDirection: "row",
    justifyContent: "space-between",
    top: 25,
  },
  closeIcon: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    height: 50,
    width: 50,
  },
  imageView: { flex: 0.6, width: "100%", height: "100%" },
});
