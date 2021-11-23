import React from "react";
import { Text } from "react-native";
import styles from "./styles";
//props are the property which is used to transport data from component to component.
//data gets transfered from parent to child but not the way up.
//props has a property called children. it is going to take whatever is typed to display in parent component.
function AppText(props) {
  return <Text style={styles.text}>{props.children}</Text>;
}

export default AppText;
