import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import SelectedCategory from "../SelectedCategory";
import Category from "../Category";
const StorePreviewItem = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.favItemBox}
      onPress={() => {
        navigation.navigate("CommunityDetail", {
          // data: data,
          // navigation: navigation,
        });
      }}
    >
      <View style={styles.favItem}>
        <View style={styles.icon}>
          <Image
            source={require("../../assets/no-image.png")}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 3,
              borderWidth: 2,
              borderColor: "grey",
            }}
          />
        </View>
        <View style={styles.favItemContent}>
          <View style={styles.contentHeader}>
            <View style={{ flexDirection: "row" }}>
              <SelectedCategory name={"음식"}></SelectedCategory>
              <SelectedCategory name={"양식"}></SelectedCategory>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Category name={"인증O"}></Category>
              <Category name={"쿠폰O"}></Category>
            </View>
          </View>
          <View style={styles.detail}>
            <Text>☆ 레드스모크하우스</Text>
            <Text>주소: 경기도 김포시 장기동 1902-1</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StorePreviewItem;

const styles = StyleSheet.create({
  favItemBox: {
    borderWidth: 1,
    pading: 5,
    // alignItems: "center",
    marginVertical: 5,
    borderRadius: 10,
    borderColor: "#e8e8e8",
    shadowColor: "#666666",

    shadowOffset: { width: 100, height: 100 },
    shadowOpacity: 0.8,
    backgroundColor: "white",
  },
  favItem: {
    height: 150,

    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    height: "75%",
    width: "30%",
  },
  favItemContent: {
    marginLeft: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  contentHeader: {
    flexDirection: "row",
    alignItems: "space-between",
    justifyContent: "space-between",
    marginTop: -2,
    marginBottom: 5,
  },
  detail: {
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  itemFooterBar: {
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "space-between",
    padding: 5,
  },
});
