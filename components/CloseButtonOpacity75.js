import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const BUTTON_SIZE = 44;
const BORDER_WIDTH = 1;

function CloseButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.button,
        { backgroundColor: "white", borderColor: "#F1F1F1" },
      ]}
    >
      <Icon name={"close"} color={props.color} size={BUTTON_SIZE / 2} />
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
    // shadowRadius: BUTTON_SIZE / 2,
    // shadowOpacity: 0.9,
    // shadowColor: "#000",
    // // shadowOffset: { x: 2, y: -2 },
    // shadowOffset: { width: 10, height: 10 },
    opacity: 0.75,
  },
});
export default CloseButton;
