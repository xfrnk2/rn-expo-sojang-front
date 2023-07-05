import React from "react";
import { Image } from "react-native";
import { Marker } from "react-native-maps";

const CustomMarker = ({ coordinate }) => {
  return (
    <Marker coordinate={coordinate}>
      <Image
        source={require("../../assets/location/grey-blank.png")}
        style={{ width: 59, height: 77 }}
      />
    </Marker>
  );
};

export default CustomMarker;
