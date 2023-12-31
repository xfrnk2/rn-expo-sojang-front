import QRCode from "react-native-qrcode-svg";
import GoalItem from "./components/GoalItem";

import GoogleMap from "./GoogleMap";
import ModalTest from "./components/ModalTest";
import MapStackNavigation from "./MapStackNavigation";
import React, { useState, useEffect } from "react";
import {
  Platform,
  Text,
  View,
  StyleSheet,
  FlatList,
  Button,
  Image,
} from "react-native";

import * as Location from "expo-location";
import "react-native-gesture-handler";
import QRCodeScanner from "./QRCodeScanner";
export default function App() {
  return (
    <View style={styles.appContainer}>
      {/* <QRCode value="https://naver.com" style={styles.qrCode} /> */}
      {/* <GoogleMap /> */}
      {/* <QRCodeScanner></QRCodeScanner> */}
      <MapStackNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

//   goalsContainer: {
//     flex: 5,
//   },

//   qrCode: {
//     flex: 1,
//   },
// });

// const styles = StyleSheet.create({
//   containerContent: { flex: 1, marginTop: 40 },
// });
