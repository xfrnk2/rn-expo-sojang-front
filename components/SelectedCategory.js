import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

function SelectedCategory(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("category clicked");
        // setIsSelected(!isSelected);
      }}
      style={[styles.categoryBase, styles.categoryClicked]}
    >
      <Text style={styles.textBoxClicked}>{props.name}</Text>
    </TouchableOpacity>
  );
}

export default SelectedCategory;

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

  categoryClicked: {
    backgroundColor: "black",
  },

  textBoxClicked: {
    color: "white",
  },
});
