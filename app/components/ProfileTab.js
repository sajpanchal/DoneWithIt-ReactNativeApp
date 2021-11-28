import React from "react";
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
import Constants from "expo-constants";

function ProfileTab(props) {
  return (
    <View style={Styles.container}>
      <Image style={Styles.image} source={props.image}></Image>
      <View style={Styles.text}>
        <Text style={Styles.title}>{props.title}</Text>
        <Text style={Styles.description}>{props.description}</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    marginTop: Constants.statusBarHeight,
  },
  text: {
    padding: 10,
    flex: 1,
    width: 100,
    alignItems: "flex-start",
  },
  title: { fontWeight: "500" },
  description: { color: "#636969", fontSize: 12 },
  image: {
    width: 70,
    height: 70,
    borderRadius: 500,
    alignContent: "center",
    justifyContent: "center",
  },
});
export default ProfileTab;
