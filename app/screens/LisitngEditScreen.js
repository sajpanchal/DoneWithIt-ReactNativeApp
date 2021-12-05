import React, { useState } from "react";
import { AppForm, SubmitButton } from "../components/forms";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from "./../components/Screen";
import AppFormField from "./../components/forms/AppFormField";
import AppFormPicker from "../components/forms/AppFormPicker";
import colors from "../config/colors";
const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];
const initialValues = { title: "", price: "", category: null, description: "" };
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().min(2).label("Description"),
});

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="words"
          autoCorrect={false}
          keyboardType="default"
          placeholder="Title"
          name="title"
        ></AppFormField>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numbers-and-punctuation"
          placeholder="Price"
          name="price"
        ></AppFormField>
        <AppFormPicker
          name="category"
          placeholder="Categories"
          items={categories}
        ></AppFormPicker>
        <AppFormField
          autoCapitalize="none"
          keyboardType="default"
          placeholder="Description"
          name="description"
        ></AppFormField>
        <SubmitButton title="Post"></SubmitButton>
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.white,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default ListingEditScreen;
