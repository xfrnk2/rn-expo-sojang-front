import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
} from "react-native";
import { MaterialTabBar, Tabs } from "react-native-collapsible-tab-view";
import Category from "../components/Category";
import Icon from "react-native-vector-icons/AntDesign";
import BackspaceButton from "../components/BackspaceButton";
import QRCodeScanner from "../QRCodeScanner";

const EditDetailScreen = ({ navigation, route }) => {
  const [curStore, setCurStore] = useState(route.params.data);

  return (
    <View style={styles.container}>
      <View style={styles.detailHeader}>
        <View style={{ flexDirection: "row" }}>
          <BackspaceButton
            onPress={() => {
              // setDetailVisible(false);
              navigation.goBack();
            }}
            color="black"
          />

          <Text
            style={{
              marginLeft: 10,
              marginTop: 14,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {curStore.name + " 관리"}
          </Text>
        </View>
        <Category name={curStore.maCat} />
      </View>
      <View style={{ flex: 1, width: "100%", height: "100%" }}>
        <TouchableOpacity style={styles.button}>
          <Text>가게 정보 수정</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("qrScanner");
          }}
        >
          <Text>Qr코드 읽기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>쿠폰 목록</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },

  button: {
    flex: 1,
    borderRadius: 20,
    margin: 10,
    paddingHorizontal: 10,
    elevation: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  detailHeader: {
    // width: 44,
    // height: 44,
    // borderRadius: 44 / 2,
    // position: "absolute",
    flexDirection: "row",

    justifyContent: "space-between",
    paddingTop: 30,
    paddingRight: 15,

    // position: "absolute",
    // paddingTop: 7,
    // paddingRight: 15,
    // left: 0,
    // right: 0,
    backgroundColor: "#fff",
    zIndex: 999,
  },
});

export default EditDetailScreen;
