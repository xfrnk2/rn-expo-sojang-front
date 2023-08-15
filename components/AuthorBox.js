import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import SelectedCategory from "./SelectedCategory";
// import Category from "../Category";
const AuthorBox = ({ navigation, name }) => {
  return (
    <View style={styles.favItemBox}>
      <View style={{ flexDirection: "row" }}>
        <SelectedCategory name={name} />
      </View>
      <View style={styles.profile}>
        <Image
          source={require("../assets/no-image.png")}
          style={{
            borderWidth: 1,
            borderColor: "grey",
            borderRadius: 30,
          }}
        />
        <View
          style={{
            paddingLeft: 10,
            // justifyContent: "space-between",
            // alignItems: "center",
          }}
        >
          <Text>작성자명</Text>
          <Text>하루전</Text>
        </View>
      </View>
    </View>
  );
};

export default AuthorBox;

const styles = StyleSheet.create({
  favItemBox: {
    borderWidth: 1,
    // pading: 5,
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
  profile: {
    alignItems: "flex-start",
    flexDirection: "row",
    paddingTop: 10,
  },
  profilePicture: { height: 30, width: 30, paddingRight: 5 },
});
