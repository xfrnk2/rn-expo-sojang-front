import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Modal,
  Text,
  Pressable,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import QRCode from "react-native-qrcode-svg";
import { useState, useEffect } from "react";

const AddStoreForm = (props) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <TouchableOpacity
      style={{ height: "100%" }}
      disabled={props.isDisabled}
      onPress={() => {
        setModalIsVisible(true);
      }}
    >
      <View
        style={
          props.isDisabled
            ? styles.couponContainerDisabled
            : styles.couponContainer
        }
      >
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalIsVisible}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            setModalIsVisible(!modalIsVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <QRCode value="https://naver.com" style={styles.qrCode} />
              <Text style={styles.modalText}>사이다 무료</Text>
              <Text style={styles.modalText}>유효기한</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalIsVisible(!modalIsVisible)}
              >
                <Text style={styles.textStyle}>닫기</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <ImageBackground
          source={
            props.isDisabled
              ? require("./assets/icons/usedCoupon.png")
              : require("./assets/icons/unusedCoupon.png")
          }
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={{ color: "white", fontSize: 20 }}>{props.title}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};
export default AddStoreForm;

const styles = StyleSheet.create({
  couponContainer: {
    borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  couponContainerDisabled: {
    borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },

  image: {
    width: "100%",
    height: "100%",

    justifyContent: "center",
    alignItems: "center",
  },

  centeredView: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  modalView: {
    width: "80%",
    height: "57%",
    margin: 20,

    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
