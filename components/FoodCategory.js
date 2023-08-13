import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

function FoodCategory(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("category clicked");
        props.onPress(props.name);
      }}
      style={[
        styles.categoryBase,
        props.value == props.name
          ? styles.categoryClicked
          : styles.categoryNormal,
      ]}
    >
      <Text
        style={
          props.value == props.name
            ? styles.textBoxClicked
            : styles.textBoxNormal
        }
      >
        {props.name}
      </Text>
    </TouchableOpacity>
  );
}

export default FoodCategory;

const styles = StyleSheet.create({
  categoryBase: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 8,
    marginTop: 10,
    marginRight: 6,
    height: 35,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    borderColor: "#F1F1F1",
  },
  categoryNormal: {
    // paddingHorizontal: 20,
    // marginHorizontal: 10,
    backgroundColor: "#e9e9e9",
  },
  categoryClicked: {
    backgroundColor: "black",
  },
  textBoxNormal: {
    color: "#c7c7c7",
  },
  textBoxClicked: {
    color: "white",
  },
});
