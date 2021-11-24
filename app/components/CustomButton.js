import React from "react";
import { StyleSheet, TouchableOpacity, Text, Platform } from "react-native";
//
function CustomButton(props) {
  return (
    <TouchableOpacity
      style={props.type === "Login" ? loginStyles.login : loginStyles.register}
    >
      <Text style={loginStyles.text}>{props.type}</Text>
    </TouchableOpacity>
  );
}

const loginStyles = StyleSheet.create({
  login: {
    flex: 0.1,
    backgroundColor: "tomato",
    width: "100%",
    height: "7%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    marginBottom: 5,
  },
  register: {
    flex: 0.1,
    backgroundColor: "dodgerblue",
    width: "100%",
    height: "7%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    marginBottom: 5,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default CustomButton;
