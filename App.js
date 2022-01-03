import React from "react";
import NetInfo from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import cache from "./app/utility/cache";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  // console.log(cache.store("person", { id: 1 }));

  const netInfo = NetInfo.fetch().then((netInfo) => console.log(netInfo));
  return (
    <>
      <OfflineNotice></OfflineNotice>
      <NavigationContainer theme={NavigationTheme}>
        <AppNavigator></AppNavigator>
      </NavigationContainer>
    </>
  );
}
