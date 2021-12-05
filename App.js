import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Switch } from "react-native";
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
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/LisitngEditScreen";
export default function App() {
  const [category, setCategory] = useState();
  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },
  ];
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
    <AppTextInput placeholder="User Name" icon="email"></AppTextInput>*/

    <ListItem
      image={require("./app/assets/mosh.jpg")}
      title="T1"
      description="D1"
    ></ListItem>
  );
}
const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
  },
});
