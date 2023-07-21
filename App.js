import QRCode from "react-native-qrcode-svg";
import GoalItem from "./components/GoalItem";

import GoogleMap from "./GoogleMap";
import ModalTest from "./components/ModalTest";

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
import SwipeUpDownModal from "react-native-swipe-modal-up-down";
export default function App() {
  let [ShowComment, setShowModelComment] = useState(true);
  let [animateModal, setanimateModal] = useState(false);

  const handler = () => {
    setShowModelComment(true);
  };

  return (
    // <View style={styles.appContainer}>
    //   {/* <QRCode value="https://naver.com" style={styles.qrCode} /> */}
    //   {/* <GoogleMap /> */}
    // </View>
    <View style={{ flex: 1 }}>
      <View style={{ marginBottom: 200 }}>
        <Text>asdfasdfasdf</Text>
        <Button
          title="123123"
          onPress={() => {
            setShowModelComment(true);
          }}
          style={{ flex: 1, marginBottom: 300 }}
        ></Button>
      </View>
      <SwipeUpDownModal
        fade={true}
        PressToanimateDirection={"down"}
        modalVisible={ShowComment}
        PressToanimate={animateModal}
        //if you don't pass HeaderContent you should pass marginTop in view of ContentModel to Make modal swipeable
        ContentModal={
          <View style={styles.containerContent}>
            {/* <FlatList
            data={data}
            renderItem={({ item, index }) => <item key={index} Data={item} />}
            keyExtractor={(item) => item.id}
          /> */}
            <Text>333</Text>
          </View>
        }
        ImageBackgroundModal={require("./assets/saks.png")}
        ImageBackgroundModalStyle={styles.imageBackgroundModalStyle}
        eaderStyle={styles.headerContent}
        ContentModalStyle={styles.Modal}
        HeaderContent={
          <View style={styles.containerHeader}>
            <Button
              title={"Press Me"}
              onPress={() => {
                setanimateModal(true);
              }}
            />
          </View>
        }
        onClose={() => {
          setShowModelComment(false);
          setanimateModal(false);
        }}
      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//   },

//   goalsContainer: {
//     flex: 5,
//   },

//   qrCode: {
//     flex: 1,
//   },
// });

const styles = StyleSheet.create({
  containerContent: { flex: 1, marginTop: 40 },
  containerHeader: {
    flex: 1,
    alignContent: "center",
    alignItems: "space-between",
    justifyContent: "center",
    height: 50,
    marginTop: 450,
    backgroundColor: "#F1F1F1",
    // opacity: 0.4,
  },
  headerContent: {
    marginTop: 10,
  },
  Modal: {
    backgroundColor: "#005252",
    marginTop: 500,
    flex: 1,
  },
  imageBackgroundModalStyle: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
