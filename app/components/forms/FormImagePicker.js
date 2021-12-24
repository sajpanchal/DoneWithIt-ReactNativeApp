import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import ImageInputList from "./../ImageInputList";
import { ErrorMessage } from ".";

function FormImagePicker({ name, ...otherprops }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((imageUri) => imageUri !== uri)
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddEvent={handleAdd}
        onRemoveEvent={handleRemove}
      ></ImageInputList>
      <ErrorMessage
        error={errors[name]}
        visible={touched[name]}
        style={{ color: "red" }}
      ></ErrorMessage>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FormImagePicker;
