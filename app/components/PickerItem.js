import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";

function PickerItem(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <AppText style={Styles.text}>{props.label}</AppText>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  text: {
    padding: 20,
    fontSize: 20,
  },
});

export default PickerItem;
