import { useState } from "react";

import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

function ModalTest(props) {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goalas!"
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.unShowDetail} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalTest;

const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,

    borderBottomWidth: 1,
    borderBotomColor: "#cccccc",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
