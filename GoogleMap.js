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
  TextInput,
} from "react-native";
import ModalTest from "./components/ModalTest";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState, useEffect } from "react";
import CustomMarker from "./components/markers/CustomMarker";
import * as Location from "expo-location";
import BackspaceButton from "./components/BackspaceButton";
import Category from "./components/Category";
import axios from "axios";
import Example from "./Example";
import { createStackNavigator } from "@react-navigation/stack";
import TabView from "./TabView";
import CloseButton from "./components/CloseButton";

const Stack = createStackNavigator();

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 400;
const CARD_WIDTH = width * 0.95;
const storesData = [
  {
    id: 1,
    name: "타코박스김포",
    maCat: "음식",
    miCat: "서양식",
    sido: "경기도",
    sigungu: "김포시",
    dong: "풍무동",
    address: "경기도 김포시 풍무동 191-2",
    lon: 126.726136342025,
    lat: 37.6068916938773,
    isCert: true,
    hasParkingLot: false,
    hasElevator: true,
    hasToilet: false,
  },
  {
    id: 2,
    name: "레드스모크하우스",
    maCat: "음식",
    miCat: "서양식",
    sido: "경기도",
    sigungu: "김포시",
    dong: "장기동",
    address: "경기도 김포시 장기동 1902-1",
    lon: 126.670780777331,
    lat: 37.6487005470003,
    isCert: false,
    hasParkingLot: false,
    hasElevator: false,
    hasToilet: false,
  },
  {
    id: 3,
    name: "뱀부포레스트",
    maCat: "음식",
    miCat: "서양식",
    sido: "경기도",
    sigungu: "김포시",
    dong: "하성면",
    address: "경기도 김포시 하성면 전류리 67-34",
    lon: 126.661722810667,
    lat: 37.6968826880415,
    isCert: true,
    hasParkingLot: true,
    hasElevator: true,
    hasToilet: true,
  },
];

const GoogleMap = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [stores, setStores] = useState(storesData);
  const [curStore, setCurStore] = useState(null);
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

    // (async () => {
    //   try {
    //     const response = await axios.get(
    //       "https://3934-219-255-155-95.ngrok-free.app/store",
    //       (headers = {
    //         // "Content-Type": "multipart/form-data",
    //         Accept: "application/json",
    //       })
    //     );

    //     const data = response.data;
    //     console.log(data);
    //     setStores(data);
    //     console.log(stores);
    //   } catch (err) {
    //     console.log(err);
    //     console.log(err.name);
    //     console.log(err.message);
    //     console.log(err.stack);
    //   }
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

      <View style={styles.screenHeader}>
        <Text>.</Text>
        <Text>소장가치 지도</Text>
        <CloseButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search here"
          placeholderTextColor="#000"
          autoCapitalize="none"
          style={{ flex: 1, padding: 0 }}
        />
        <Ionicons name="ios-search" size={20} />
      </View>
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
              key={marker.id}
              coordinate={{
                latitude: marker.lat,
                longitude: marker.lon,
              }}
              pinColor="#2D63E2"
              // title={marker.id}
              // description={marker.nM}
              anchor={{ x: 0.5, y: 1 }}
              showsUserLocation
              loadingEnabled
              showsMyLocationButton
              onPress={(e) => {
                setCurStore(stores[marker.id - 1]);
                showDetail(e);
              }}
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
                <View style={{ flexDirection: "row" }}>
                  <BackspaceButton
                    onPress={() => {
                      setDetailVisible(false);
                    }}
                    color="black"
                  />
                  <Image
                    source={require("./assets/no-image.png")}
                    style={{
                      width: 40,
                      height: 40,
                      marginLeft: -5,
                      marginTop: 10,
                      borderRadius: 3,
                      borderWidth: 2,
                      borderColor: "grey",
                    }}
                  />

                  <Text
                    style={{
                      marginLeft: 10,
                      marginTop: 14,
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    {curStore.name} {curStore.isCert && "☆"}
                  </Text>
                </View>
                <Category name={curStore.maCat} />

                {/* <CloseButton onPress={() => {}} color="black" /> */}

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
                {/* <TouchableOpacity
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
                </TouchableOpacity> */}
                <TabView
                  navigation={navigation}
                  data={curStore}
                  update={setCurStore}
                ></TabView>
                {/* <View style={styles.textContent}>
                  <Text numberOfLines={1} style={styles.cardDescription}>
                    {curStore.address}
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
                      {curStore.isCert && (
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
                      )}
                    </View>
                  </TouchableOpacity>
                </View> */}
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
  searchBox: {
    flex: 1,
    position: "absolute",
    marginTop: Platform.OS === "ios" ? 40 : 20,
    flexDirection: "row",
    backgroundColor: "black",
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
    padding: 10,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    top: 70,
    left: 15,
    right: 0,
    backgroundColor: "#fff",
    zIndex: 999,
    alignContent: "center",
    alignItems: "center",
  },
  screenHeader: {
    // width: 44,
    // height: 44,
    // borderRadius: 44 / 2,
    // position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    opacity: 0.75,
    paddingRight: 15,
    height: 75,
    position: "absolute",
    paddingTop: 20,
    paddingRight: 15,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    zIndex: 999,
  },
  cardContainer: {
    flex: 1,
    flexDirection: "column-reverse",
  },
  cardHeaderElement: {
    // width: 44,
    // height: 44,
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
    paddingTop: 7,
    paddingRight: 15,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  cardContent: {
    marginTop: 80,
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContent: {
    // flex: 2,
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
