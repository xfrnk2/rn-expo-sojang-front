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
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import React, { useState, useEffect } from "react";
import CustomMarker from "./components/markers/CustomMarker";
import * as Location from "expo-location";
import CloseButton from "./components/CloseButton";
import Category from "./components/Category";
import axios from "axios";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 260;
const CARD_WIDTH = width * 0.95;

const GoogleMap = ({ navigation }) => {
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
          "https://d129-219-255-155-95.ngrok-free.app/store",
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
  }

  return (
    <View style={styles.screen}>
      {/* <ModalTest visible={detailVisible} unShowDetail={unShowDetail} /> */}

      {lag !== 0 && log !== 0 && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: lag,
            longitude: log,
            latitudeDelta: 0.009,
            longitudeDelta: 0.004,
          }}
          provider={PROVIDER_GOOGLE}
          clusterColor="#000000"
          maxZoom={12}
          minZoom={5}
          // onPress={(e) => unShowDetail(e)}
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
      <View style={{}}>
        <View style={[styles.cardContainer, { zIndex: 999 }]}>
          {detailVisible && (
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Category name="분류이름" />
                {/* <CloseButton onPress={() => {}} color="black" /> */}
                <CloseButton onPress={() => {}} color="black" />
                {/* <Image
                  style={styles.cardHeaderElement}
                  source={require("./assets/saks.png")}
                  resizeMode="cover"
                />
                <Image
                  style={styles.cardHeaderElement}
                  source={require("./assets/button/close_square_button.png")}
                  resizeMode="cover"
                /> */}
              </View>
              <View style={styles.cardContent}>
                <TouchableOpacity
                  style={styles.cardImage}
                  onPress={() => {
                    console.log("onpressimage");
                    navigation.navigate("MapDetail", {
                      info: 123,
                      title: "test title",
                    });
                  }}
                >
                  <Image
                    style={styles.cardImage}
                    source={require("./assets/saks.png")}
                    resizeMode="cover"
                  />
                </TouchableOpacity>

                <View style={styles.textContent}>
                  <Text numberOfLines={1} style={styles.cardtitle}>
                    가게 이름
                  </Text>

                  <Text numberOfLines={1} style={styles.cardDescription}>
                    가게 주소
                  </Text>
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
                    <View style={styles.button}>
                      <Text
                        style={[
                          styles.textSign,
                          {
                            color: "#FF6347",
                          },
                        ]}
                      >
                        인증된 가게에요
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default GoogleMap;

const styles = StyleSheet.create({
  map: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  screen: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    flexDirection: "column-reverse",
  },
  cardHeaderElement: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
  },
  card: {
    // justifyContent: "flex-end",
    // padding: 10,

    elevation: 5,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginHorizontal: 10,
    marginBottom: 10,
    shadowRadius: 5,
    shadowOpacity: 0.7,
    shadowColor: "#000",
    // shadowOffset: { x: 2, y: -2 },
    shadowOffset: { width: 100, height: 100 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",

    flexDirection: "column",
  },
  cardHeader: {
    // width: 44,
    // height: 44,
    // borderRadius: 44 / 2,
    // position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    padding: 7,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  cardContent: {
    flexDirection: "column",
    flex: 1,
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
  cardImage: {
    flex: 4,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignSelf: "center",
  },
});
