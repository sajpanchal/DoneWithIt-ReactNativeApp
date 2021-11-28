import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  onPress,
  renderRightActions,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItem(props) {
  return (
    <View style={Styles.container}>
      <View
        style={{
          width: 40,
          height: 40,
          borderStyle: "solid",
          borderRadius: 100,
          backgroundColor: props.bgcolor,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name={props.icon}
          size={20}
          color={colors.white}
        ></MaterialCommunityIcons>
      </View>
      <View style={Styles.text}>
        <Text style={Styles.title}>{props.title}</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },

  text: {
    padding: 10,
    flex: 1,
    width: 100,
    alignItems: "flex-start",
  },
  title: { fontWeight: "500" },
  description: { color: "#636969" },
  image: {
    width: 70,
    height: 70,
    borderRadius: 500,
    alignContent: "center",
    justifyContent: "center",
  },
});
export default ListItem;
