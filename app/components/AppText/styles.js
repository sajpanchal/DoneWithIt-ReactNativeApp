import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 50,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default styles;
