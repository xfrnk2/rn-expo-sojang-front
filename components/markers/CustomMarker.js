import React from "react";
import { Image } from "react-native";
import { Marker } from "react-native-maps";

const CustomMarker = ({ coordinate, id, nM }) => {
  return (
    <Marker
      coordinate={coordinate}
      pinColor="#2D63E2"
      title={id}
      description={nM}
    >
      <Image
        source={require("../../assets/location/grey-blank.png")}
        style={{ width: 59, height: 77 }}
      />
    </Marker>
  );
};

export default CustomMarker;
