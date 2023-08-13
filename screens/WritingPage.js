import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  TextInput,
} from "react-native";
import BackspaceButton from "../components/BackspaceButton";
import CloseButton from "../components/CloseButton";
const WritingPage = ({ navigation, route }) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 60,
          backgroundColor: "#fff",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",

          paddingHorizontal: 20,
        }}
      >
        <CloseButton
          onPress={() => {
            // setDetailVisible(false);
            navigation.goBack();
          }}
          color="black"
        />

        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 17, fontWeight: 400 }}>완료 </Text>
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <View
          style={{
            width: "90%",
            height: 360,
            marginHorizontal: 10,
            // padding: 10,
            borderWidth: 1,
            borderColor: "#f4f4f4",
            borderRadius: 3,
            // shadowRadius: 3,
            // elevation: 3,
            // shadowColor: "#ccc",
            // shadowOpacity: 0.7,
            // shadowOffset: { x: 100, y: 100 },
            backgroundColor: "#fafafa",
            paddingLeft: 10,
          }}
        >
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(value) => {
              setText(value);
              console.log(text);
            }}
            value={text}
            placeholder={"방명록을 입력하세요"}
          />
        </View>
      </View>
      {/* <View
        style={{
          flowDirection: "row",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          marginRight: 20,
        }}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>등록</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },

  button: {
    // borderWidth: 2,
    // backgroundColor: "#F2E4C5",
    backgroundColor: "#e8e8e8",
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 500,
  },
  detailHeader: {
    // width: 44,
    // height: 44,
    // borderRadius: 44 / 2,
    // position: "absolute",
    flexDirection: "row",

    justifyContent: "flex-start",

    paddingRight: 15,

    // position: "absolute",
    // paddingTop: 7,
    // paddingRight: 15,
    // left: 0,
    // right: 0,
    backgroundColor: "#fff",
    zIndex: 999,
  },
});

export default WritingPage;
