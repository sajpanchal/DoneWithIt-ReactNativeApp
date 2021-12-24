import React, { useRef, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onAddEvent, onRemoveEvent }) {
  const scrollView = useRef();

  return (
    <ScrollView
      ref={scrollView}
      horizontal={true}
      onContentSizeChange={() => scrollView.current.scrollToEnd()}
    >
      <View style={styles.container}>
        {imageUris.map((uri) => (
          <View key={uri} style={styles.image}>
            <ImageInput
              imageUri={uri}
              onChangeEvent={() => onRemoveEvent(uri)}
            ></ImageInput>
          </View>
        ))}
        <ImageInput onChangeEvent={(uri) => onAddEvent(uri)}></ImageInput>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
