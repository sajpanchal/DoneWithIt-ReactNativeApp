import React from "react";
import { AppForm, SubmitButton } from "../components/forms";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from "./../components/Screen";
import AppFormField from "./../components/forms/AppFormField";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(2).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="words"
          autoCorrect={false}
          icon="account"
          keyboardType="default"
          placeholder="Name"
          textContentType="Name"
          name="name"
        ></AppFormField>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="EmailAddress"
          name="email"
        ></AppFormField>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          secureTextEntry={true}
          keyboardType="password"
          placeholder="Password"
          textContentType="Password"
          name="password"
        ></AppFormField>
        <SubmitButton title="Register"></SubmitButton>
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default RegisterScreen;
