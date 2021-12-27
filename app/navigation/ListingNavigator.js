import React from "react";
import Listings from "./../screens/Listings";
import ListingDetails from "./../screens/ListingDetails";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const ListingNavigator = () => (
  <Stack.Navigator
    initialRouteName="listings"
    screenOptions={{
      presentation: "modal",
      headerShown: false,
    }}
  >
    <Stack.Screen name="listings" component={Listings}></Stack.Screen>
    <Stack.Screen
      name="Listing Details"
      component={ListingDetails}
    ></Stack.Screen>
  </Stack.Navigator>
);
export default ListingNavigator;
