import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
function AppFormField({ name, width, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...otherProps}
      ></AppTextInput>

      <ErrorMessage
        error={errors[name]}
        visible={touched[name]}
        style={{ color: "red" }}
      ></ErrorMessage>
    </>
  );
}

export default AppFormField;