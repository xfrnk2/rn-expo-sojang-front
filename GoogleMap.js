import { PROVIDER_GOOGLE, Marker } from "react-native-maps";
//import MapView from "react-native-maps";
import MapView from "react-native-map-clustering";
import {
  StyleSheet,
  View,
  Button,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import ModalTest from "./components/ModalTest";

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
  const [detailVisible, setDetailVisible] = useState(false);

  const showDetail = (event) => {
    console.log("showdetail");
    setDetailVisible(true);
  };

  const unShowDetail = (event) => {
    console.log("unshowdetail");
    setDetailVisible(false);
  };

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
          "https://5c4e-219-255-155-95.ngrok-free.app/store",
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

  const popUp = (event) => {};

  return (
    <View style={styles.screen}>
      <ModalTest visible={detailVisible} unShowDetail={unShowDetail} />
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
          maxZoom={12}
          minZoom={5}
          onPress={(e) => unShowDetail(e)}
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
            // <CustomMarker
            //   key={index} // 고유한 키 값 설정
            //   coordinate={{
            //     latitude: marker.lat,
            //     longitude: marker.lon,
            //   }}
            //   onpress={}
            //   id={marker.id}
            //   nM={marker.nM}
            //   anchor={{ x: 0.5, y: 1 }}
            //   showsUserLocation
            //   loadingEnabled
            //   showsMyLocationButton
            // />

            <Marker
              key={index}
              coordinate={{
                latitude: marker.lat,
                longitude: marker.lon,
              }}
              id={marker.id}
              nM={marker.nM}
              pinColor="#2D63E2"
              title={marker.id}
              description={marker.nM}
              anchor={{ x: 0.5, y: 1 }}
              showsUserLocation
              loadingEnabled
              showsMyLocationButton
              onPress={(e) => showDetail(e)}
              tracksViewChanges={false}
            >
              <Image
                source={require("./assets/marker/map_marker_auth_bright.png")}
                style={{ width: 50, height: 50 }}
              />
            </Marker>
          ))}
        </MapView>
      )}
      <View style={(styles.cardContainer, { zIndex: 999 })}>
        {detailVisible && (
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Image style={styles.cardImage} resizeMode="cover" />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>
                  123
                </Text>

                <Text numberOfLines={1} style={styles.cardDescription}>
                  des
                </Text>
                <View style={styles.button}>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={[
                      styles.signIn,
                      {
                        borderColor: "#FF6347",
                        borderWidth: 1,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.textSign,
                        {
                          color: "#FF6347",
                        },
                      ]}
                    >
                      Order Now
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default GoogleMap;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  screen: {
    flex: 1,
  },
  cardContainer: { flexDirection: "column-reverse" },
  cardContainerUp: {
    flex: 2,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,

    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
    flexDirection: "column-reverse",
  },
  cardContent: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  textSign: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
