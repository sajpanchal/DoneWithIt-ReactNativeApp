import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
function ListItem(props) {
  return (
    <View style={Styles.container}>
      <Image style={Styles.image} source={props.image}></Image>
      <View style={Styles.text}>
        <Text style={Styles.title}>{props.title}</Text>
        <Text style={Styles.subtitle}>{props.subtitle}</Text>
      </View>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 0.5,
    width: "100%",
    height: "100%",
    padding: 10,
  },
  text: {
    padding: 10,
    flex: 1,
    width: 100,
    height: 100,
    alignItems: "flex-start",
  },
  title: { fontWeight: "500" },
  subtitle: { color: "#636969" },
  image: {
    width: 70,
    height: 70,
    borderRadius: 500,
    alignContent: "center",
    justifyContent: "center",
  },
});
export default ListItem;
