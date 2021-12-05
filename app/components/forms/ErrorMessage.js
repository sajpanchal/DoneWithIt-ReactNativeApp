import React from "react";
import AppText from "../AppText";
import { StyleSheet } from "react-native";

function ErrorMessage(props) {
  if (!props.error || !props.visible) return null;
  return <AppText style={styles.error}>{props.error}</AppText>;
}
const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
export default ErrorMessage;
