import React, { useEffect, useState } from "react";

import Screen from "./app/components/Screen";

import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/LisitngEditScreen";
export default function App() {
  const [imageUris, setImageUris] = useState([]);
  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };
  return <ListingEditScreen></ListingEditScreen>;
}
/*
   <ImageInputList
        name="imagePicker"
        imageUris={imageUris}
        onAddEvent={(uri) => handleAdd(uri)}
        onRemoveEvent={(uri) => handleRemove(uri)}
      ></ImageInputList>
*/
