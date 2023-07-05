import React from "react";
import { Image } from "react-native";
import { Marker } from "react-native-maps";

const SiMarker = ({ coordinate }) => {
  return (
    <Marker coordinate={coordinate}>
      <Image
        source={require("../../assets/location/arrow.png")}
        style={{ width: 59, height: 77 }}
      />
    </Marker>
  );
};

export default SiMarker;
