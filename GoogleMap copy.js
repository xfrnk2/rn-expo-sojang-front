import { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import MapView from "react-native-maps";
import { StyleSheet, View, Button } from "react-native";
import ClusteredMapView from "react-native-maps-super-cluster";

import React, { useState, useEffect } from "react";
import CustomMarker from "./components/markers/CustomMarker";
import * as Location from "expo-location";

import axios from "axios";

const GoogleMap = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [stores, setStores] = useState([]);
  const [region, setRegion] = useState({
    latitude: 37.5665,
    longitude: 126.978,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [ggroupedMarkers, setGgroupedMarkers] = useState({});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      console.log(
        "location...0000000000000000000000000000000000000000000000",
        location
      );
    })();

    (async () => {
      try {
        const response = await axios.get(
          "https://1cb3-219-255-155-95.ngrok-free.app/store",
          (headers = {
            // "Content-Type": "multipart/form-data",
            Accept: "application/json",
          })
        );

        const data = response.data;
        console.log(data);
        console.log(
          "999999999999999999999999999999999그..전체크기",
          data.length
        );
        setStores(data);
        console.log(stores);

        // 클러스터링을 위해 구 이름으로 마커를 그룹화
        // const groupedMarkers = {};
        // stores.forEach((marker) => {
        //   // const { title } = marker;
        //   if (groupedMarkers["abc"]) {
        //     groupedMarkers["abc"].push(marker);
        //   } else {
        //     groupedMarkers["abc"] = [marker];
        //   }
        // });
        // console.log("111111111111", groupedMarkers);
        // setGgroupedMarkers(groupedMarkers);
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
    // setRegion({
    //   ...region,
    //   latitude: location.coords.latitude,
    //   longitude: location.coords.longitude,
    // });
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

  // 줌 레벨에 따라 클러스터 또는 개별 마커를 렌더링
  // const renderMarkers = () => {
  //   const zoomLevel = Math.round(Math.log2(360 / region.longitudeDelta)) + 1;

  //   if (zoomLevel < 12) {
  //     // 클러스터링된 마커만 표시
  //     return Object.keys(ggroupedMarkers).map((title) => {
  //       const clusteredMarkers = ggroupedMarkers[title];
  //       const clusterCoordinate = {
  //         latitude: clusteredMarkers[0].lat,
  //         longitude: clusteredMarkers[0].lon,
  //       };

  //       return (
  //         <CustomMarker
  //           key={title}
  //           coordinate={clusterCoordinate}
  //           id={`${title} (${clusteredMarkers.length})`}
  //           nM="Zoom in to see individual markers"
  //         />
  //       );
  //     });
  //   } else {
  //     // 개별 마커 표시
  //     return stores.map((marker) => (
  //       <CustomMarker
  //         key={marker.id}
  //         nM={marker.nM}
  //         coordinate={{
  //           latitude: marker.lat,
  //           longitude: marker.lon,
  //         }}
  //         id={marker.title}
  //       />
  //     ));
  //   }
  // };

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

          {/* {renderMarkers()} */}
          {/* {stores.map((marker, index) => (
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
          ))} */}
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
});
