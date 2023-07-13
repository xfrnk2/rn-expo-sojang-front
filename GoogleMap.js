import { PROVIDER_GOOGLE, Marker } from "react-native-maps";
//import MapView from "react-native-maps";
import MapView from "react-native-map-clustering";
import { StyleSheet, View, Button, Dimensions } from "react-native";

import React, { useState, useEffect } from "react";
import CustomMarker from "./components/markers/CustomMarker";
import * as Location from "expo-location";

import axios from "axios";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;

const GoogleMap = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();

    (async () => {
      try {
        const response = await axios.get(
          "https://7b1e-219-255-155-95.ngrok-free.app/store",
          (headers = {
            // "Content-Type": "multipart/form-data",
            Accept: "application/json",
          })
        );

        const data = response.data;
        console.log(data);
        setStores(data);
        console.log(stores);
      } catch (err) {
        console.log(err);
        console.log(err.name);
        console.log(err.message);
        console.log(err.stack);
      }
    })();

    //   await axios
    //     .get("127.0.0.1:3000/store")
    //     .then((response) => {
    //       const data = response.data;
    //       console.log(data);
    //       setStores(data);
    //       console.log(stores);
    //     })
    //     .catch((error) => console.log(error));
    // })();
  }, []);

  let lag = 0;
  let log = 0;

  if (errorMsg) {
    console.log(errorMsg);
  } else if (location) {
    console.log(location.coords.latitude);
    console.log(location.coords.longitude);
    lag = location.coords.latitude;
    log = location.coords.longitude;

    // const markerComponents = stores.map((marker, index) => (
    //   <CustomMarker
    //     key={index} // 고유한 키 값 설정
    //     coordinate={{
    //       latitude: marker.lat,
    //       longitude: marker.lon,
    //     }}
    //     id={marker.id}
    //     nM={marker.nM}
    //     anchor={{ x: 0.5, y: 1 }}
    //   />
    // ));
  }

  return (
    <View style={styles.screen}>
      {lag !== 0 && log !== 0 && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: lag,
            longitude: log,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
          provider={PROVIDER_GOOGLE}
          clusterColor="#000000"
          maxZoom={10}
          minZoom={5}
        >
          {/* <Marker
            coordinate={{
              latitude: lag,
              longitude: log,
            }}
            pinColor="#2D63E2"
            title="하이"
            description="내용"
          /> */}
          {/* <CustomMarker
            coordinate={{ latitude: lag, longitude: log }}
            anchor={{ x: 0.5, y: 1 }}
          ></CustomMarker> */}
          {/* <View>{stores}</View>; */}
          {stores.map((marker, index) => (
            <CustomMarker
              key={index} // 고유한 키 값 설정
              coordinate={{
                latitude: marker.lat,
                longitude: marker.lon,
              }}
              id={marker.id}
              nM={marker.nM}
              anchor={{ x: 0.5, y: 1 }}
            />
          ))}
        </MapView>
      )}
    </View>
  );
};

export default GoogleMap;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
});
