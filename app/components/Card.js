import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function Card(props) {
  return (
    <View style={cardStyles.mainView}>
      <View style={cardStyles.card}>
        <Image style={cardStyles.image} source={props.image}></Image>
        <View style={cardStyles.text}>
          <Text style={cardStyles.title}>{props.title}</Text>
          <Text style={cardStyles.subtitle}>{props.subtitle}</Text>
        </View>
      </View>
    </View>
  );
}

const cardStyles = StyleSheet.create({
  mainView: {
    flex: 0.6,
    width: "100%",
    height: "40%",
    backgroundColor: "#f8f4f4",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 0.7,
    width: "90%",
    height: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 20,
    color: "dodgerblue",
  },
  text: {
    margin: 10,
  },
});
