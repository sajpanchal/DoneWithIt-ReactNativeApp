import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import ProfileTab from "../components/ProfileTab";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";
import ListItemSeparator from "./../components/ListItemSeparator";

function MyAccount(props) {
  const items = [
    {
      id: 0,
      title: "My Listings",
      icon: "format-list-bulleted",
      bgcolor: colors.primary,
    },
    {
      id: 1,
      title: "My Messages",
      icon: "email",
      bgcolor: colors.secondary,
    },
  ];
  return (
    <View style={Styles.mainView}>
      <ListItem
        title="Mosh Hamedani"
        description="programmingwithmosh@gmail.com"
        image={require("../assets/mosh.jpg")}
      ></ListItem>
      <View style={{ marginTop: 50 }}>
        <FlatList
          scrollEnabled={false}
          data={items}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              icon={item.icon}
              bgcolor={item.bgcolor}
            ></ListItem>
          )}
        ></FlatList>
      </View>
      <View style={{ marginTop: 20 }}>
        <ListItem title="Log Out" icon="logout" bgcolor="#ffe66d"></ListItem>
      </View>
    </View>
  );
}
const Styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.light,
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
export default MyAccount;
