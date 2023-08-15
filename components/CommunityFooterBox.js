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
const CommunityFooterBox = ({ navigation }) => {
  return (
    <View style={styles.favItemBox}>
      <View style={styles.itemBox}>
        <Text>icon</Text>
        <Text style={styles.textBox}>공감</Text>
        <Text>0</Text>
      </View>
      <View style={styles.itemBox}>
        <Text>icon</Text>
        <Text style={styles.textBox}>댓글</Text>
        <Text>0</Text>
      </View>
    </View>
  );
};

export default CommunityFooterBox;

const styles = StyleSheet.create({
  favItemBox: {
    borderWidth: 1,
    padding: 10,
    // alignItems: "center",
    // marginBottom: 5,
    // borderRadius: 10,
    borderColor: "#e8e8e8",
    shadowColor: "#666666",
    flexDirection: "row",
    shadowOffset: { width: 100, height: 100 },
    shadowOpacity: 0.8,
    backgroundColor: "white",
  },
  icon: {
    marginHorizontal: 5,
  },
  itemBox: {
    marginRight: 5,
    flexDirection: "row",
  },
  textBox: {
    marginHorizontal: 5,
  },
});
