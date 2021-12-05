import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
function PickerItem(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          alignItems: "center",
          paddingHorizontal: 10,
          paddingVertical: 10,

          margin: 2,
          width: 100,
        }}
      >
        <View
          style={{
            backgroundColor: props.bgcolor,
            borderRadius: 500,
            width: 70,
            height: 70,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name={props.icon}
            size={50}
            color={colors.white}
          ></MaterialCommunityIcons>
        </View>
        <AppText style={Styles.text}>{props.label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  text: {
    padding: 2,
    fontSize: 15,
  },
});

export default PickerItem;
