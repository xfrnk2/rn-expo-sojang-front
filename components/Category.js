import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

function Category(props) {
  return (
    <TouchableOpacity style={[styles.categoryBase, styles.categoryNormal]}>
      <Text style={styles.textBoxNormal}>{props.name}</Text>
    </TouchableOpacity>
  );
}

export default Category;

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
    backgroundColor: "white",
  },

  textBoxNormal: {
    color: "black",
  },
});
