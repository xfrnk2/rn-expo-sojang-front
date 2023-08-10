import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

function Facility(props) {
  return (
    <TouchableOpacity
      //   onPress={props.onPress}
      style={[styles.facility, { backgroundColor: "#ccc" }]}
    >
      <Text style={{ fontWeight: "bold", fontSize: 14, color: "black" }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

export default Facility;

const styles = StyleSheet.create({
  facility: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 6,
    paddingTop: 7,
    paddingBottom: 5,

    // paddingHorizontal: 20,
    // marginHorizontal: 10,
    justifyContent: "center",
    textAlign: "center",
    height: 40,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});
