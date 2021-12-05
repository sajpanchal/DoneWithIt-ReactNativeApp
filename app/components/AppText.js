import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";

//props are the property which is used to transport data from component to component.
//data gets transfered from parent to child but not the way up.
//props has a property called children. it is going to take whatever is typed to display in parent component.
function AppText(props) {
  return (
    <Text style={props.style} numberOfLines={2}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.dark,
  },
});

export default AppText;
