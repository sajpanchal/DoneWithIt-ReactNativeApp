import React from "react";
import CustomButton from "../CustomButton";
import { useFormikContext } from "formik";
function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <CustomButton type={title} onPress={handleSubmit}></CustomButton>;
}

export default SubmitButton;
