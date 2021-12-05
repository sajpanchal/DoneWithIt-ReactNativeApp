import React from "react";
import { ErrorMessage } from ".";
import AppPicker from "./../AppPicker";
import { useFormikContext } from "formik";
function AppFormPicker({ name, items, placeholder }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      ></AppPicker>
      <ErrorMessage
        error={errors[name]}
        visible={touched[name]}
        style={{ color: "red" }}
      ></ErrorMessage>
    </>
  );
}

export default AppFormPicker;
