import React, { useState } from "react";
import { FlatList, View } from "react-native";
import Card from "../components/Card";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import routes from "../navigation/routes";

function Listings(props) {
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();
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
      style={{ marginTop: Constants.statusBarHeight }}
      data={cards}
      keyExtractor={(card) => card.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 15 }}>
          <Card
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
          ></Card>
        </View>
      )}
      extraData={selectedId}
    ></FlatList>
  );
}

export default Listings;
