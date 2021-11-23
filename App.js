import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ViewImage from "./app/screens/ViewImage";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText";
import CustomButton from "./app/components/CustomButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function App() {
  return <WelcomeScreen />;
}
