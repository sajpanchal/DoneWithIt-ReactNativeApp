import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ProfileTab from "../components/ProfileTab";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
function MyAccount(props) {
  return (
    <View style={Styles.mainView}>
      <ProfileTab
        title="Mosh Hamedani"
        description="programmingwithmosh@gmail.com"
        image={require("../assets/mosh.jpg")}
      ></ProfileTab>
      <View style={{ marginTop: 50 }}>
        <ListItem
          title="My Listings"
          icon="format-list-bulleted"
          bgcolor={colors.primary}
        ></ListItem>
        <ListItem
          title="My Messages"
          icon="email"
          bgcolor={colors.secondary}
        ></ListItem>
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
  },
});
export default MyAccount;
