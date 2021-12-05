import React from "react";
import { Platform, StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={Styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={Styles.icon}
        ></MaterialCommunityIcons>
      )}
      <TextInput style={Styles.textInput} {...otherProps}></TextInput>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 10,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
  icon: {
    margin: 10,
  },
});
export default AppTextInput;
