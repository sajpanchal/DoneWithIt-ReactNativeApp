import React, { useEffect, useState } from "react";
import { Button, Text } from "react-native";
import Screen from "./app/components/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Listings from "./app/screens/Listings";
import ListingDetails from "./app/screens/ListingDetails";
import MyAccount from "./app/screens/MyAccount";
import ListingEditScreen from "./app/screens/LisitngEditScreen";
import Messages from "./app/screens/Messages";
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthNavigator from "./app/navigation/AuthNavigator";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    ></Button>
  );
};
const listingDetails = () => {
  <Screen>
    <ListingDetails></ListingDetails>
  </Screen>;
};
const listings = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <Button
        title="Click"
        onPress={() => navigation.navigate("Listing Details")}
      ></Button>
      <Listings
        onPress={() => navigation.navigate("Listing Details")}
      ></Listings>
    </Screen>
  );
};

const Account = () => {
  <Screen>
    <MyAccount></MyAccount>
  </Screen>;
};
const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="listings"
    screenOptions={{
      headerStyle: { backgroundColor: "tomato" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="listings" component={Listings}></Stack.Screen>
    <Stack.Screen
      name="Listing Details"
      component={ListingDetails}
    ></Stack.Screen>
  </Stack.Navigator>
);
const AccountStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={MyAccount}></Stack.Screen>
    <Stack.Screen name="Messages" component={Messages}></Stack.Screen>
  </Stack.Navigator>
);
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: "tomato",
      tabBarActiveTintColor: "white",
      tabBarInactiveBackgroundColor: "#eee",
      tabBarInactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={StackNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="home"
            size={size}
            color={color}
          ></MaterialCommunityIcons>
        ),
      }}
    ></Tab.Screen>
    <Tab.Screen
      name="Listing Edit Screen"
      component={ListingEditScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            size={size}
            color={color}
          ></MaterialCommunityIcons>
        ),
      }}
    ></Tab.Screen>
    <Tab.Screen
      name="Account"
      component={AccountStackNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="account"
            size={size}
            color={color}
          ></MaterialCommunityIcons>
        ),
      }}
    ></Tab.Screen>
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator></AuthNavigator>
    </NavigationContainer>
  );
}
