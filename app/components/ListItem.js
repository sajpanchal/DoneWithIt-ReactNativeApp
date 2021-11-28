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
        {props.icon ? (
          <MaterialCommunityIcons
            style={{}}
            name={props.icon}
            size={20}
            color={colors.white}
          ></MaterialCommunityIcons>
        ) : (
          <Image
            source={props.image}
            style={{
              width: 60,
              height: 60,
              borderRadius: 600,
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Image>
        )}
      </View>
      <View style={Styles.detailsContainer}>
        <Text style={Styles.title}>{props.title}</Text>
        {props.description && (
          <Text style={Styles.description}>{props.description}</Text>
        )}
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: colors.white,
  },

  detailsContainer: {
    marginLeft: 15,
    alignItems: "flex-start",
    justifyContent: "center",
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
