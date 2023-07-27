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
        source={require("../../assets/marker/map_marker_auth_bright.png")}
        style={{ width: 50, height: 50 }}
      />
    </Marker>
  );
};

export default CustomMarker;
