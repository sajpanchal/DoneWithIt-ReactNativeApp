import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Card from "./Card";
export default function ListingDetails(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.7 }}>
        <Card
          title="Red Jacket for sale!"
          subtitle="$100"
          image={require("../assets/jacket.jpg")}
        />
      </View>
      <View style={Styles.profile}>
        <Image
          style={Styles.profilePic}
          source={require("../assets/mosh.jpg")}
        ></Image>
        <View style={Styles.text}>
          <Text style={{ fontSize: 16 }}>Mosh Hamedani</Text>
          <Text style={{ color: "grey", fontSize: 16 }}>5 Listings</Text>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  profile: {
    flex: 0.5,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    margin: 10,
  },
  text: {
    margin: 10,
    flex: 1,
    width: 100,
    height: 100,
    alignItems: "flex-start",
    //   justifyContent: "center",
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 500,
    alignContent: "center",
    justifyContent: "center",
  },
});
