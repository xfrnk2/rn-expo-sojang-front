//Login.tsx
import { React, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput,
} from "react-native";

export default function Login({ navigation }) {
  const [isAuthBoxVisible, setIsAuthBoxVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [authNumber, setAuthNumber] = useState("");
  const [authReqButtonInvisible, setAuthReqButtonInvisible] = useState(true);
  const [authConfirmButtonInvisible, setAuthConfirmButtonInvisible] =
    useState(true);
  const PN_MAX_LEN = 11; // Phone Number
  const AN_MAX_LEN = 4; // Auth Number
  const PREFIX_PN = "010";

  function phoneNumberInputHandler(enteredText) {
    setPhoneNumber(enteredText);

    setAuthReqButtonInvisible(
      !(
        enteredText.substring(0, 3) == PREFIX_PN &&
        enteredText.length === PN_MAX_LEN
      )
    );
  }

  function authNumberInputHandler(enteredText) {
    setAuthNumber(enteredText);

    setAuthConfirmButtonInvisible(!(enteredText.length === AN_MAX_LEN));
  }

  return (
    <View style={styles.homeContainer}>
      <Text>휴대폰번호로 가입해요.</Text>
      <Text>번호는 안전하게 보관되며 어디에도 공개되지 않습니다.</Text>

      <TextInput
        inputMode="numeric"
        style={styles.textInput}
        placeholder="Your course goalas!"
        onChangeText={phoneNumberInputHandler}
        value={phoneNumber}
        maxLength={PN_MAX_LEN}
      ></TextInput>
      <Button
        title="인증번호 받기"
        android_ripple={{ color: "black", borderless: true }}
        onPress={() => setIsAuthBoxVisible(true)}
        disabled={authReqButtonInvisible}
        color="#000000"
      ></Button>

      {isAuthBoxVisible && (
        <View>
          <TextInput
            inputMode="numeric"
            style={styles.textInput}
            placeholder="인증번호를 입력"
            onChangeText={authNumberInputHandler}
            value={authNumber}
            maxLength={AN_MAX_LEN}
          ></TextInput>

          <Button
            title="인증번호 입력하기"
            android_ripple={{ color: "black", borderless: true }}
            onPress={() => navigation.navigate("Home")}
            disabled={authConfirmButtonInvisible}
            color="#000000"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  blankArea: {
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
});
