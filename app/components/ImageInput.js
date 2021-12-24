import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import * as ImagePicker from "expo-image-picker";

function ImageInput({ imageUri, onChangeEvent }) {
  useEffect(() => {
    requestPermission();
  }, []);
  //method to request permission to access photo library.
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library.");
    } else {
      console.log("permission is granted");
    }
  };
  const handlePress = () => {
    if (!imageUri) selectImage();
    else {
      Alert.alert("delete", "Are you sure you want to delete?", [
        {
          text: "Yes",
          onPress: () => onChangeEvent(null),
        },
        {
          text: "No",
        },
      ]);
    }
  };
  const selectImage = async () => {
    try {
      //launch the library
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        // if image is set, set the imageUri state to a given image uri
        onChangeEvent(result.uri);
        console.log(result.uri);
      }
    } catch (error) {
      console.log("error reading an image");
    }
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            style={styles.icon}
            name="camera"
            size={40}
            color={colors.medium}
          ></MaterialCommunityIcons>
        )}
        {imageUri && (
          <Image style={styles.image} source={{ uri: imageUri }}></Image>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default ImageInput;
