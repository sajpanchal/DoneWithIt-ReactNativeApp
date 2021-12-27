import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import MyAccount from "./../screens/MyAccount";
import Messages from "./../screens/Messages";
const Stack = createStackNavigator();
const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={MyAccount}></Stack.Screen>
    <Stack.Screen name="Messages" component={Messages}></Stack.Screen>
  </Stack.Navigator>
);

export default AccountNavigator;
