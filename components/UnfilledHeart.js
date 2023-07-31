import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";

const BUTTON_SIZE = 37;
const BORDER_WIDTH = 1;

function UnfilledHeart(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.button,
        { backgroundColor: "white", borderColor: "#F1F1F1" },
      ]}
    >
      <Image
        style={{ width: "100%", height: "100%" }}
        source={require("../assets/icons/unfilled-heart.png")}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: BUTTON_SIZE + BORDER_WIDTH,
    height: BUTTON_SIZE + BORDER_WIDTH,
    // borderWidth: BORDER_WIDTH,
    borderRadius: BUTTON_SIZE / 2,
    shadowRadius: BUTTON_SIZE / 2,
    shadowOpacity: 0.9,
    shadowColor: "#000",
    // shadowOffset: { x: 2, y: -2 },
    shadowOffset: { width: 10, height: 10 },
  },
});
export default UnfilledHeart;
