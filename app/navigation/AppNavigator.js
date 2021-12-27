import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/LisitngEditScreen";

import ListingNavigator from "./ListingNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator screenOptions={{}}>
    <Tab.Screen
      name="Feed"
      component={ListingNavigator}
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
      options={({ navigation, route }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate("Listing Edit Screen")}
          ></NewListingButton>
        ),
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            size={size}
            color={color}
          ></MaterialCommunityIcons>
        ),
      })}
    ></Tab.Screen>
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
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
export default AppNavigator;
