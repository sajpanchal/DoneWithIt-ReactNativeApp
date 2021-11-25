import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ViewImage from "./app/screens/ViewImage";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText";
import CustomButton from "./app/components/CustomButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "./app/components/Card";
import ListingDetails from "./app/components/ListingDetails";
export default function App() {
  return (
    /*<View
      style={{
        flex: 0.6,
        width: "100%",
        height: "40%",
        backgroundColor: "#f8f4f4",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
      }}
    >
      <Card
        title="Red Jacket for sale!"
        subtitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>

    <ListingDetails />*/
    <WelcomeScreen />
  );
}
