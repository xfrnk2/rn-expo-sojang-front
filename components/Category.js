import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

function Category(props) {
  return (
    <TouchableOpacity
      //   onPress={props.onPress}
      style={[
        styles.category,
        { backgroundColor: "white", borderColor: "#F1F1F1" },
      ]}
    >
      <Text>{props.name}</Text>
    </TouchableOpacity>
  );
}

export default Category;

const styles = StyleSheet.create({
  category: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 8,
    // paddingHorizontal: 20,
    // marginHorizontal: 10,
    height: 35,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});
