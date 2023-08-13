import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Facility(props) {
  return (
    <View
      //   onPress={props.onPress}
      style={[styles.facility, { backgroundColor: "#ccc" }]}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 15,
          color: "black",
        }}
      >
        {props.title}
      </Text>
    </View>
  );
}

export default Facility;

const styles = StyleSheet.create({
  facility: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingTop: 6,
    // paddongBottom: 14,
    marginRight: 6,

    // paddingHorizontal: 20,
    // marginHorizontal: 10,
    justifyContent: "center",
    textAlign: "center",
    height: 34,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});
