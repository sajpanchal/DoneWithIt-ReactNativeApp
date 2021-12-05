import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  Platform,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";
import Constants from "expo-constants";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
function AppPicker(props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback
        style={{ width: "50%" }}
        onPress={() => setModalVisible(true)}
      >
        <View style={Styles.container}>
          {props.icon && (
            <MaterialCommunityIcons
              name={props.icon}
              size={20}
              color={colors.medium}
              style={Styles.icon}
            ></MaterialCommunityIcons>
          )}
          {props.selectedItem ? (
            <View>
              <AppText style={Styles.text}>{props.selectedItem.label}</AppText>
            </View>
          ) : (
            <AppText
              style={{
                color: colors.medium,
                fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
                fontSize: 18,
              }}
            >
              {props.placeholder}
            </AppText>
          )}
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <MaterialCommunityIcons
              name="chevron-down"
              size={20}
              color={colors.medium}
            ></MaterialCommunityIcons>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen style={{ flex: 1, alignItems: "center" }}>
          <Button title="close" onPress={() => setModalVisible(false)}></Button>

          <FlatList
            data={props.items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={3}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                icon={item.icon}
                bgcolor={item.bgcolor}
                onPress={() => {
                  setModalVisible(false);
                  props.onSelectItem(item);
                }}
              ></PickerItem>
            )}
          ></FlatList>
        </Screen>
      </Modal>
    </React.Fragment>
  );
}
const Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 10,
    flexDirection: "row",
    width: "60%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },

  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 18,
    color: colors.dark,
  },
});
export default AppPicker;
