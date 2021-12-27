import React, { useEffect, useState } from "react";
import { Button, TextInput } from "react-native";
import { View, StyleSheet } from "react-native";
import * as Location from "expo-location";
import Screen from "./Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../config/colors";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
function AppLocation(props) {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    sendLocationRequest();
  });
  const sendLocationRequest = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Location access permission is not granted by the user");
    } else {
    }
  };
  const getLocation = async (location) => {
    let { coords } = await Location.getLastKnownPositionAsync({});
    let coordinate = {
      long: coords.longitude.toFixed(2),
      lat: coords.latitude.toFixed(2),
    };
    setLocation(coordinate);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={location ? JSON.stringify(location) : ""}
        placeholder="Location"
        editable={false}
      ></TextInput>

      <TouchableOpacity onPress={getLocation}>
        <MaterialCommunityIcons
          name="map-marker-circle"
          size={30}
        ></MaterialCommunityIcons>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: colors.light,
    height: "10%",
    borderRadius: 10,
    alignItems: "center",
    //justifyContent: "center",
    //    marginLeft: 5,
    marginRight: 10,
    marginTop: 10,
  },
  input: {
    color: colors.black,
    width: "90%",
    padding: 15,
    fontSize: 18,
  },
});

export default AppLocation;
