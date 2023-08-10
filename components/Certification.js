import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

function Certification(props) {
  return (
    <TouchableOpacity
      //   onPress={props.onPress}
      style={[
        styles.certification,
        { backgroundColor: "white", borderColor: "#ff671b" },
      ]}
    >
      <Text style={{ fontWeight: "bold", fontSize: 15, color: "#ff671b" }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

export default Certification;

const styles = StyleSheet.create({
  certification: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingTop: 8,
    paddongBottom: 12,
    marginBottom: 30,
    borderWidth: 2,
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
