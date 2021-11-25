import React from "react";
import { StyleSheet, TouchableOpacity, Text, Platform } from "react-native";
//
function CustomButton(props) {
  return (
    <TouchableOpacity style={loginStyles[props.type]} onPress={props.onPress}>
      <Text style={loginStyles.text}>{props.type}</Text>
    </TouchableOpacity>
  );
}

const loginStyles = StyleSheet.create({
  Login: {
    backgroundColor: "tomato",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    margin: 5,
    padding: 15,
  },
  Register: {
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
