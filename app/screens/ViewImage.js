import React from "react";
import { View, Image } from "react-native";

export default function ViewImage() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 0.2,
          backgroundColor: "black",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 0.9,
            backgroundColor: "black",
            flexDirection: "row",
            justifyContent: "space-between",
            top: 25,
          }}
        >
          <View
            style={{
              backgroundColor: "tomato",
              height: 50,
              width: 50,
            }}
          ></View>

          <View
            style={{
              backgroundColor: "dodgerblue",
              height: 50,
              width: 50,
            }}
          ></View>
        </View>
      </View>
      <Image
        style={{ flex: 0.6, width: "100%", height: "100%" }}
        source={require("../assets/chair.jpg")}
      />
      <View style={{ flex: 0.2, backgroundColor: "black" }}></View>
    </View>
  );
}
