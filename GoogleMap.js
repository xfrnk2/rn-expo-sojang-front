import { PROVIDER_GOOGLE, Marker } from "react-native-maps";
//import MapView from "react-native-maps";
import MapView from "react-native-map-clustering";
import {
  Alert,
  StyleSheet,
  View,
  Button,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Pressable,
  Switch,
} from "react-native";
import ModalTest from "./components/ModalTest";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState, useEffect, useRef } from "react";
import CustomMarker from "./components/markers/CustomMarker";
import * as Location from "expo-location";
import BackspaceButton from "./components/BackspaceButton";
import Category from "./components/Category";
import axios from "axios";
import Example from "./Example";
import { createStackNavigator } from "@react-navigation/stack";
import TabView from "./TabView";
import CloseButton from "./components/CloseButton";
import {
  NAVER_CLIENT_ID,
  NAVER_CLIENT_SECRET,
  REVERSE_GEOCODING_URL,
} from "@env";
import { Picker } from "@react-native-picker/picker";
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
    isCert: true,
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
export const mapRef = React.createRef();

const GoogleMap = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [stores, setStores] = useState(storesData);
  const [pin, setPin] = useState([]);
  const [isPinShowable, setIsPinShowable] = useState(false);
  const [curStore, setCurStore] = useState(null);
  const [detailVisible, setDetailVisible] = useState(false);
  const [isAddingStore, setIsAddingStore] = useState(false);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [pinAddress, setPinAddress] = useState(["", "", ""]);
  const [pickerCategory, setPickerCategory] = useState("");
  const [isPickerShowDefault, setIsPickerShowDefault] = useState(true);
  const [checkModalIsVisible, setCheckModalIsVisible] = useState(false);
  const [isCouponEnabled, setIsCouponEnabled] = useState(false);
  const toggleSwitch = () =>
    setIsCouponEnabled((previousState) => !previousState);

  let storeId = 4;

  const showDetail = (event) => {
    console.log("showdetail");
    setDetailVisible(true);
  };

  const unShowDetail = (event) => {
    console.log("unshowdetail");
    setDetailVisible(false);
  };
  const pinMarker = useRef(null);
  const pinIsNotSelectedAlert = () =>
    Alert.alert(
      "위치가 선택되지 않았어요.",
      "등록을 희망하는 지도상 위치를 눌러 주세요",
      [
        {
          text: "닫기",
          onPress: () => console.log("위치가 선택되지 않았어요."),
          style: "cancel",
        },
      ]
    );

  const createStoreInfo = async () => {
    console.log("가게정보 생성 등록 버튼 눌림");

    await setCurrentLocation()
      .then((data) => {
        setPinAddress([
          data.data.results[0].region.area1.name,
          data.data.results[0].region.area2.name,
          data.data.results[0].region.area3.name,
        ]);
      })
      .then(() => {
        setModalIsVisible(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const setCurrentLocation = async () =>
    await axios.get(REVERSE_GEOCODING_URL, {
      params: {
        targetcrs: "epsg:3857",
        orders: "legalcode",
        output: "json",
        coords: `${pin[0].lon},${pin[0].lat}`,
      },
      headers: {
        "X-NCP-APIGW-API-KEY-ID": NAVER_CLIENT_ID,
        "X-NCP-APIGW-API-KEY": NAVER_CLIENT_SECRET,
      },
    });

  const checkCreateStoreAlert = () =>
    Alert.alert(
      "가게를 방문하셨나요?",
      "선택한 위치에 가게 정보를 만드시겠어요? 이름과 주소가 필요합니다.",
      [
        {
          text: "닫기",
          onPress: () => console.log("가게정보 생성 닫기"),
          style: "cancel",
        },
        {
          text: "등록",
          onPress: async () => {
            console.log("가게정보 생성 등록 버튼 눌림");

            await setCurrentLocation()
              .then((data) => {
                setPinAddress([
                  data.data.results[0].region.area1.name,
                  data.data.results[0].region.area2.name,
                  data.data.results[0].region.area3.name,
                ]);
              })
              .then(() => {
                setModalIsVisible(true);
              })
              .catch((e) => {
                console.log(e);
              });
          },
        },
      ]
    );

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      console.log("useeffect실행");
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      setPin([
        {
          lat: currentLocation.coords.latitude,
          lon: currentLocation.coords.longitude,
        },
      ]);
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
    console.log(5151);
    console.log(location.coords.latitude);
    console.log(location.coords.longitude);
    lag = location.coords.latitude;
    log = location.coords.longitude;
  }

  return (
    <View style={styles.screen}>
      {/* <ModalTest visible={detailVisible} unShowDetail={unShowDetail} /> */}

      <View style={styles.screenHeader}>
        <CloseButton
          onPress={() => {
            navigation.goBack();
          }}
        />

        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          소장가치 지도　　　
        </Text>
        <Text>　</Text>
      </View>
      <View style={styles.searchBox}>
        <Picker
          selectionColor={"orange"}
          style={{
            zIndex: 998,
            flex: 1,
            padding: 0,
            fontSize: 16,
            fontWeight: "bold",
          }}
          selectedValue={pickerCategory}
          onValueChange={(value, index) => {
            setPickerCategory(value);
          }}
        >
          <Picker.Item
            label={!pickerCategory ? "매장을 선택해 주세요" : "전체"}
            value="all"
          />
          <Picker.Item label="편의점" value="convStore" />
          <Picker.Item label="카페" value="cafe" />
          <Picker.Item label="미용실" value="hairshop" />
          <Picker.Item label="한식 음식점" value="korRes" />
          <Picker.Item label="양식 음식점" value="wesRes" />
          <Picker.Item label="중식 음식점" value="chiRes" />
          <Picker.Item label="동남아시아식 음식점" value="wsaRes" />
          <Picker.Item label="기타 음식점" value="etcRes" />
        </Picker>
        {/* <TextInput
          placeholder="Search here"
          placeholderTextColor="#000"
          autoCapitalize="none"
          style={{ flex: 1, padding: 0 }}
        /> */}
        <View
          style={{
            position: "absolute",
            right: "7.5%",
            backgroundColor: "white",
            zIndex: 999,
            borderRadius: 55,
          }}
        >
          <Ionicons
            name="ios-search"
            size={20}
            style={{
              borderRadius: 55,
            }}
          />
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          top: (Platform.OS === "ios" ? 90 : 80) + 70,
          paddingHorizontal: 10,
          justifyContent: "flex-end",
          alignItems: "flex-end",
          zIndex: 999,
          left: 15,
          right: 0,
          width: "90%",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 40,
            paddingHorizontal: 10,
            paddingVertical: 0,
            shadowColor: "#ccc",
            shadowOffset: { width: 40, height: 40 },
            shadowOpacity: 0.5,
            shadowRadius: 40,
            elevation: 10,
            flexDirection: "row",
            justifyContent: "center",

            textAlign: "center",
            marginRight: "-3%",
          }}
        >
          <Switch
            trackColor={{ false: "#767577", true: "#ff671b" }}
            thumbColor={isCouponEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isCouponEnabled}
          />
          <View
            style={{
              justifyContent: "center",
              textAlign: "center",
              paddingBottom: 1,
            }}
          >
            <Text
              style={{
                color: "#ff671b",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              쿠폰
            </Text>
          </View>
        </View>
      </View>
      {lag !== 0 && log !== 0 && (
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: lag,
            longitude: log,
            latitudeDelta: 0.009,
            longitudeDelta: 0.004,
          }}
          tracksViewChanges={true}
          provider={PROVIDER_GOOGLE}
          clusterColor="#000000"
          maxZoom={12}
          minZoom={5}
          showsUserLocation={true}
          showsMyLocationButton={false}
          // onPress={(e) => unShowDetail(e)}
          onPress={(e) => {
            if (isAddingStore && isPinShowable) {
              setPin([
                {
                  lon: e.nativeEvent.coordinate.longitude,
                  lat: e.nativeEvent.coordinate.latitude,
                },
              ]);

              pinMarker.current.showCallout();

              console.log("추가완료");
            }

            //{ markers: [...this.state.markers, { latlng: e.nativeEvent.coordinate }] }
          }}
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
              tracksViewChanges={true}
            >
              <Image
                source={
                  marker.isCert
                    ? require("./assets/marker/map_marker_auth_bright.png")
                    : require("./assets/marker/map_marker_normal.png")
                }
                style={{ width: 50, height: 50 }}
              />
            </Marker>

            //  핀
          ))}

          {isPinShowable &&
            pin.map((marker, index) => (
              <Marker
                ref={pinMarker}
                key={index}
                coordinate={{
                  latitude: marker.lat,
                  longitude: marker.lon,
                }}
                pinColor="#2D63E2"
                title={"이 곳에 가게를 등록해요"}
                onCalloutPress={() => {
                  setCheckModalIsVisible(true);
                }}
                // description={marker.nM}
                anchor={{ x: 0.5, y: 1 }}
                showsUserLocation
                loadingEnabled
                showsMyLocationButton
                tracksViewChanges={false}
              >
                {/* <Image
                source={require("./assets/marker/map_marker_normal.png")}
                style={{ width: 50, height: 50 }}
              /> */}
              </Marker>

              //  핀
            ))}
        </MapView>
      )}
      <Modal
        animationType="fade"
        transparent={true}
        visible={checkModalIsVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setCheckModalIsVisible(!checkModalIsVisible);
        }}
      >
        <View
          style={{
            flex: 1,

            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            borderRadius: 3,
            shadowColor: "#000",
            shadowOffset: { width: 100, height: 100 },

            shadowRadius: 3,
            shadowOpacity: 0.7,
            elevation: 5,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        >
          <View
            style={{
              width: "94%",
              height: 200,
              padding: 5,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 3,
              shadowRadius: 3,
              shadowOpacity: 0.7,
              shadowColor: "#000",
              shadowOffset: { width: 100, height: 100 },
              elevation: 5,
            }}
          >
            <View
              style={{
                flex: 2,
                // flexDirection: "column",
                // justifyContent: "center",
                // alignItems: "center",
                marginBottom: 24,
                width: "100%",
                // borderBottomWidth: 1,
                // borderBotomColor: "#cccccc",
                padding: 16,
              }}
            >
              <View style={{ marginBottom: 20 }}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  가게를 방문하셨나요?
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 18 }}>
                  주소는 자동으로 찾아드릴게요.
                  {"\n"}
                  이름과 카테고리를 입력해 주세요.
                </Text>
              </View>
            </View>
            <View style={styles.modalFooter}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setCheckModalIsVisible(false);
                }}
              >
                <Text style={styles.textStyle}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setCheckModalIsVisible(false);
                  setModalIsVisible(true);
                  createStoreInfo();
                }}
              >
                <Text style={styles.textStyle}>가게 등록</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalIsVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setModalIsVisible(!modalIsVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.inputContainerTitle}>
              <Text
                style={{ textAlign: "left", fontSize: 20, fontWeight: "bold" }}
              >
                새로운 가게를 등록해요
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.modalText}>이름</Text>
              <View style={styles.textInputBox}>
                <TextInput
                  style={styles.textInput}
                  placeholder="가게 이름을 입력 해 주세요"
                  // onChangeText={goalInputHandler}
                  // value={enteredGoalText}
                ></TextInput>
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.modalText}>카테고리</Text>
              <View style={styles.textInputBox}>
                <Picker
                  style={[styles.textInput, { zIndex: 999 }]}
                  selectedValue={pickerCategory}
                  onValueChange={(value, index) => {
                    setPickerCategory(value);
                  }}
                >
                  <Picker.Item label="편의점" value="convStore" />
                  <Picker.Item label="카페" value="cafe" />
                  <Picker.Item label="미용실" value="hairshop" />
                  <Picker.Item label="한식 음식점" value="restaurant" />
                  <Picker.Item label="양식 음식점" value="restaurant" />
                  <Picker.Item label="중식 음식점" value="restaurant" />
                  <Picker.Item label="동남아시아식 음식점" value="restaurant" />
                  <Picker.Item label="기타 음식점" value="restaurant" />
                </Picker>
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.modalText}>주소</Text>
              <Text style={styles.textAddress}>
                {pinAddress[0] + " " + pinAddress[1] + " " + pinAddress[2]}
              </Text>
            </View>

            <View style={styles.modalFooter}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setModalIsVisible(!modalIsVisible);
                  setIsAddingStore(false);
                  setIsPinShowable(false);
                }}
              >
                <Text style={styles.textStyle}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setModalIsVisible(!modalIsVisible);
                  setIsAddingStore(false);
                  setIsPinShowable(false);
                  setStores([
                    ...stores,
                    {
                      id: storeId++,
                      name: "신규 생성된 가게(테스트)",
                      maCat: "음식",
                      miCat: "서양식",
                      sido: "경기도",
                      sigungu: "김포시",
                      dong: "풍무동",
                      address: "신규 생성된 가게(테스트)",
                      lon: pin[0].lon,
                      lat: pin[0].lat,
                      isCert: false,
                      hasParkingLot: false,
                      hasElevator: false,
                      hasToilet: false,
                    },
                  ]);
                }}
              >
                <Text style={styles.textStyle}>등록</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={{
          position: "absolute", //use absolute position to show button on top of the map
          top: "75%", //for center align
          right: "10%",
          alignSelf: "flex-end", //for align to right

          flexDirection: "row-reverse",
        }}
      >
        <View style={{ marginLeft: 5 }}>
          <View style={{ flexDirection: "column-reverse" }}>
            <MaterialIcon
              style={{
                borderRadius: 20,

                padding: 20,
                color: "#717171",
                backgroundColor: "#ffffff",
                shadowRadius: 20,
                shadowOpacity: 0.7,
                shadowColor: "#000",
                shadowOffset: { width: 100, height: 100 },
                elevation: 3,
              }}
              size={30}
              name="my-location"
              onPress={() => {
                mapRef.current.animateToRegion({
                  latitude: lag,
                  longitude: log,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                });
              }}
            />
            <MaterialIcon
              style={{
                padding: 20,
              }}
              size={30}
            />
          </View>
        </View>
        <View style={{ flexDirection: "column-reverse" }}>
          {!isAddingStore ? (
            <MaterialIcon
              style={{
                borderRadius: 20,

                padding: 20,
                color: "#717171",
                backgroundColor: "#ffffff",
                shadowRadius: 20,
                shadowOpacity: 0.7,
                shadowColor: "#000",
                shadowOffset: { width: 100, height: 100 },
                elevation: 3,
              }}
              size={30}
              name="add-business"
              onPress={() => {
                mapRef.current.animateToRegion({
                  latitude: lag,
                  longitude: log,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                });
                setIsPinShowable(true);
                setIsAddingStore(true);
                // setPin(null);
              }}
            />
          ) : (
            <>
              <TouchableOpacity
                style={{
                  borderRadius: 20,

                  paddingHorizontal: 20,

                  paddingTop: 22,
                  paddingBottom: 18,
                  marginTop: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#ffffff",
                  shadowRadius: 20,
                  shadowOpacity: 0.7,
                  shadowColor: "#000",
                  shadowOffset: { width: 100, height: 100 },
                  elevation: 3,
                }}
                onPress={() => {
                  setIsPinShowable(false);
                  setIsAddingStore(false);
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    height: 30,
                    width: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#717171",
                    fontWeight: "bold",
                  }}
                >
                  취소
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 20,
                  paddingHorizontal: 20,

                  paddingTop: 22,
                  paddingBottom: 18,
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#717171",
                  backgroundColor: "#ffffff",
                  shadowRadius: 20,
                  shadowOpacity: 0.7,
                  shadowColor: "#000",
                  shadowOffset: { width: 100, height: 100 },
                  elevation: 3,
                }}
                onPress={() => {
                  if (pin == null) {
                    pinIsNotSelectedAlert();
                  } else {
                    setCheckModalIsVisible(true);
                    // checkCreateStoreAlert();
                  }
                }}
              >
                <Text
                  style={{
                    color: "#717171",
                    fontSize: 16,
                    height: 30,
                    width: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                  }}
                >
                  등록
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
      {/* {isAddingStore && (
        <View
          style={{
            position: "absolute", //use absolute position to show button on top of the map
            top: "85%", //for center align
            right: "50%",
            alignSelf: "flex-end", //for align to right
            flexDirection: "column-reverse",
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: 20,
              borderWidth: 1,
              padding: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              if (pin == null) {
                pinIsNotSelectedAlert();
              } else {
                checkCreateStoreAlert();
              }
            }}
          >
            <Text style={{ fontSize: 15, height: 30, width: 30 }}>등록</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 20,
              borderWidth: 1,
              padding: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              setIsPinShowable(false);
              setIsAddingStore(false);
            }}
          >
            <Text style={{ fontSize: 15, height: 30, width: 30 }}>취소</Text>
          </TouchableOpacity>
        </View>
      )}

      {!isAddingStore && (
        <View
          style={{
            position: "absolute", //use absolute position to show button on top of the map
            top: "85%", //for center align
            right: "30%",
            alignSelf: "flex-end", //for align to right
            borderRadius: 20,
            borderWidth: 1,
            padding: 20,
          }}
        >
          <MaterialIcon
            size={30}
            name="add-business"
            onPress={() => {
              mapRef.current.animateToRegion({
                latitude: lag,
                longitude: log,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              });
              setIsPinShowable(true);
              setIsAddingStore(true);
              // setPin(null);
            }}
          />
        </View>
      )} */}
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
                  style={{ zIndex: 999 }}
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
    borderRadius: 40,
    paddingHorizontal: 10,
    paddingVertical: 0,
    shadowColor: "#ccc",
    shadowOffset: { width: 40, height: 40 },
    shadowOpacity: 0.5,
    shadowRadius: 40,
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
    height: 60,
    position: "absolute",
    // paddingTop: 20,
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
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    shadowRadius: 10,
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
  centeredView: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: { width: 100, height: 100 },

    shadowRadius: 3,
    shadowOpacity: 0.7,
  },
  modalView: {
    width: "94%",
    height: 400,
    margin: 5,
    borderRadius: 3,
    backgroundColor: "white",
    shadowRadius: 3,
    shadowOpacity: 0.7,
    shadowColor: "#000",
    shadowOffset: { width: 100, height: 100 },
    padding: 15,
    alignItems: "center",
    elevation: 5,
  },
  button: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#ff671b",
    shadowRadius: 10,
    shadowOpacity: 0.7,
    shadowColor: "#000",
    shadowOffset: { width: 100, height: 100 },
    margin: 10,
    paddingHorizontal: 10,
    elevation: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
  },
  modalText: {
    marginBottom: 5,
    textAlign: "left",
    fontSize: 14,
  },
  inputContainer: {
    flex: 1,
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    marginBottom: 24,
    width: "100%",
    // borderBottomWidth: 1,
    // borderBotomColor: "#cccccc",
    padding: 16,
  },
  inputContainerTitle: {
    flex: 1,
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    width: "100%",
    // borderBottomWidth: 1,
    // borderBotomColor: "#cccccc",
    padding: 5,
  },
  textInputBox: {
    borderBottomWidth: 1,
  },
  textInput: {
    // borderWidth: 1,
    borderColor: "#cccccc",
    // backgroundColor: "#cccccc",
    // borderRadius: 10,
    width: "100%",
    padding: 8,
    height: 50,
    paddingLeft: 16,
    fontSize: 15,
  },
  textAddress: {
    width: "100%",
    padding: 8,
    height: 50,
    fontSize: 15,
    paddingLeft: 16,
  },
  picker: {
    // borderWidth: 1,
    // borderColor: "#cccccc",
    borderRadius: 10,
    width: "100%",
    padding: 8,
    height: 50,
  },
  modalFooter: {
    flexDirection: "row",
    flex: 2,
  },
});
