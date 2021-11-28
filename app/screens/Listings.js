import React from "react";
import { FlatList, View } from "react-native";
import Card from "../components/Card";

function Listings(props) {
  const cards = [
    {
      id: 1,
      title: "Red Jacket for Sale",
      subtitle: "$100",
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 2,
      title: "Couch in great condition",
      subtitle: "$1000",
      image: require("../assets/couch.jpg"),
    },
  ];
  return (
    <FlatList
      data={cards}
      keyExtractor={(card) => card.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 15 }}>
          <Card
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
          ></Card>
        </View>
      )}
    ></FlatList>
  );
}

export default Listings;
