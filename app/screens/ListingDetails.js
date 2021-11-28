import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Card from "../components/Card";
import ListItem from "../components/ListItem";
export default function ListingDetails(props) {
  return (
    <View>
      <View style={Styles.cardContainer}>
        <Card
          title="Red Jacket for sale!"
          subtitle="$100"
          image={require("../assets/jacket.jpg")}
        />
      </View>
      <View style={Styles.userContainer}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          description="5 Listings"
        />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  cardContainer: {},
  profile: {
    flex: 0.5,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    padding: 10,
  },
  text: {
    padding: 10,
    flex: 1,
    width: 100,
    height: 100,
    alignItems: "flex-start",
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 500,
    alignContent: "center",
    justifyContent: "center",
  },
  userContainer: {
    marginVertical: 50,
  },
});
