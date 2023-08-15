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
const CommentsBox = ({ navigation }) => {
  return (
    <View style={styles.favItemBox}>
      <View style={{ flex: 7 }}>
        <Text>코멘트란</Text>
      </View>
      <View
        style={{
          flex: 1.35,
          borderWidth: 1,
          borderColor: "#e8e8e8",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.commentInputBox}>
          <Text style={{ color: "#c7c7c7" }}>댓글을 입력하세요</Text>
        </View>
      </View>
    </View>
  );
};

export default CommentsBox;

const styles = StyleSheet.create({
  favItemBox: {
    // borderWidth: 1,
    borderTopWidth: 1,
    marginTop: 5,
    // padding: 10,
    // alignItems: "center",
    // marginBottom: 2,
    // borderRadius: 10,
    borderColor: "#e8e8e8",
    shadowColor: "#666666",
    flex: 1,
    shadowOffset: { width: 100, height: 100 },
    shadowOpacity: 0.8,
    backgroundColor: "white",
  },
  commentInputBox: {
    padding: 10,
    marginVertical: 10,
    justifyContent: "center",
    // textAlign: "center",
    // alignItems: "center",
    flex: 1,
    width: "90%",
    backgroundColor: "#e9e9e9",
    borderRadius: 5,
  },
});
