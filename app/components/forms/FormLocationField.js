import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import AppLocation from "../AppLocation";

function FormLocationField(props) {
  const { setFieldValue, values, touched } = useFormikContext();

  const getLocation = () => {
    setFieldValue(values[props.name]);
  };

  return <AppLocation onPress={getLocation}></AppLocation>;
}

export default FormLocationField;
