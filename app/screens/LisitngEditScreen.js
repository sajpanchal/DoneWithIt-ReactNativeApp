import React, { useState } from "react";
import { AppForm, SubmitButton } from "../components/forms";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from "./../components/Screen";
import AppFormField from "./../components/forms/AppFormField";
import AppFormPicker from "../components/forms/AppFormPicker";
import colors from "../config/colors";
import FormImagePicker from "../components/forms/FormImagePicker";
import listingsApi from "../api/listings";
import useLocation from "../hooks/useLocation";

const categories = [
  { label: "Furniture", icon: "floor-lamp", value: 1, bgcolor: "#fc5c65" },
  { label: "Clothing", icon: "shoe-heel", value: 2, bgcolor: "#2bcbba" },
  { label: "Cameras", icon: "camera", value: 3, bgcolor: "#fed330" },
  { label: "Cars", icon: "car", value: 4, bgcolor: "#fd9644" },
  { label: "Games", icon: "cards", value: 5, bgcolor: "#26de81" },
  { label: "Sports", icon: "basketball", value: 6, bgcolor: "#45aaf2" },
  { label: "Movies & Music", icon: "headphones", value: 6, bgcolor: "#4b7bec" },
];
const initialValues = {
  title: "",
  price: "",
  category: null,
  description: "",
  images: [],
};
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().min(2).label("Description"),
  images: Yup.array().min(1, "Please select atleast on image.").label("Images"),
});

function ListingEditScreen(props) {
  const location = useLocation();
  const submitForm = async (listing) => {
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => console.log(progress)
    );
    if (!result.ok) {
      return alert("Couldn't save the listing");
    }
    return alert("Success");
  };
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={initialValues}
        onSubmit={(values) => submitForm(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images"></FormImagePicker>
        <AppFormField
          autoCapitalize="words"
          autoCorrect={false}
          keyboardType="default"
          placeholder="Title"
          name="title"
          width="100%"
        ></AppFormField>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numbers-and-punctuation"
          placeholder="Price"
          name="price"
          width="30%"
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
          width="100%"
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
