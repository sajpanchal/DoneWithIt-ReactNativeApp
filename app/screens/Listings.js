import React, { useState } from "react";
import { FlatList, View } from "react-native";
import Card from "../components/Card";
import Constants from "expo-constants";
import listingsApi from "../api/listings";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import routes from "../navigation/routes";
import { useEffect } from "react/cjs/react.development";
import AppText from "../components/AppText";
import Screen from "./../components/Screen";
import CustomButton from "../components/CustomButton";
import ActivityIndicator from "./../components/ActivityIndicator";
import useApi from "./../hooks/useApi";

function Listings(props) {
  const [selectedId, setSelectedId] = useState(null);

  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);
  const navigation = useNavigation();
  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <CustomButton type="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={true}></ActivityIndicator>
      <FlatList
        style={{ marginTop: Constants.statusBarHeight }}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 15 }}>
            <Card
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              title={item.title}
              subtitle={"$" + item.price}
              imageUrl={item.images[0].url}
              thumbnailUrl={item.images[0].thumbnailUrl}
            ></Card>
          </View>
        )}
        extraData={selectedId}
      ></FlatList>
    </Screen>
  );
}

export default Listings;
