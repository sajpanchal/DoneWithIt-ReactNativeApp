import React from "react";
import { StyleSheet, TouchableOpacity, Text, Platform } from "react-native";
//
function CustomButton(props) {
  return (
    <TouchableOpacity
      style={props.type === "Login" ? loginStyles.login : loginStyles.register}
      onPress={props.onPress}
    >
      <Text style={loginStyles.text}>{props.type}</Text>
    </TouchableOpacity>
  );
}

const loginStyles = StyleSheet.create({
  login: {
    backgroundColor: "tomato",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    margin: 5,
    padding: 15,
  },
  register: {
    backgroundColor: "dodgerblue",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    margin: 5,
    padding: 15,
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
export default CustomButton;
