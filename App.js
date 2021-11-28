import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ViewImage from "./app/screens/ViewImage";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText";
import CustomButton from "./app/components/CustomButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "./app/components/Card";
import ListingDetails from "./app/screens/ListingDetails";
import Messages from "./app/screens/Messages";
import colors from "./app/config/colors";
import ListItem from "./app/components/ListItem";
import MyAccount from "./app/screens/MyAccount";
import Listings from "./app/screens/Listings";
export default function App() {
  return (
    /*<View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
      }}
    >
      <Card
        title="Red Jacket for sale!"
        subtitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>

    <ListingDetails />
    <WelcomeScreen />
   
    
    <View style={Styles.mainView}>
      <Listings></Listings>
    </View>*/
    <MyAccount></MyAccount>
  );
}
const Styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.light,
    flex: 1,
  },
});
