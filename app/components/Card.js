import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function Card(props) {
  return (
    <View style={cardStyles.card}>
      <Image style={cardStyles.image} source={props.image}></Image>
      <View style={cardStyles.text}>
        <Text style={cardStyles.title}>{props.title}</Text>
        <Text style={cardStyles.subtitle}>{props.subtitle}</Text>
      </View>
    </View>
  );
}

const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    // top: 20,
    //  marginBottom: 20,
    overflow: "hidden", //hides if the content is going outside its border.
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 20,
    marginBottom: 7,
  },
  subtitle: {
    fontSize: 20,
    color: "dodgerblue",
  },
  text: {
    padding: 20,
  },
});
