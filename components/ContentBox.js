import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
// import SelectedCategory from "../SelectedCategory";
// import Category from "../Category";
const ContentBox = ({ navigation }) => {
  return (
    <View style={styles.favItemBox}>
      <Text>여기는 장기역에서 얼마나 걸려요?</Text>
    </View>
  );
};

export default ContentBox;

const styles = StyleSheet.create({
  favItemBox: {
    borderWidth: 1,

    padding: 10,
    // alignItems: "center",
    // marginBottom: 2,
    // borderRadius: 10,
    borderColor: "#e8e8e8",
    shadowColor: "#666666",

    shadowOffset: { width: 100, height: 100 },
    shadowOpacity: 0.8,
    backgroundColor: "white",
  },
});
