import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ListRenderItem,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import Example from "./Example";
import BackspaceButton from "./components/BackspaceButton";
import Category from "./components/Category";
import FilledHeart from "./components/FilledHeart";
import UnfilledHeart from "./components/UnfilledHeart";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ToggleIcon } from "./ToggleIcon";
const MapDetail = ({ navigation, route }) => {
  // const update = route.params.update;
  const [curStore, setCurStore] = useState(route.params.data);
  useEffect(() => {
    navigation.setOptions({
      title: route.params.title,
    });
  }, []);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.detailHeader}>
        <View style={{ flexDirection: "row" }}>
          <BackspaceButton
            onPress={() => {
              // setDetailVisible(false);
              navigation.goBack();
            }}
            color="black"
          />
          <Image
            source={require("./assets/no-image.png")}
            style={{
              width: 40,
              height: 40,
              marginLeft: -5,
              marginTop: 10,
              borderRadius: 3,
              borderWidth: 2,
              borderColor: "grey",
            }}
          />

          <Text
            style={{
              marginLeft: 10,
              marginTop: 14,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {curStore.name} {curStore.isCert && "☆"}
          </Text>
        </View>
        <Category name={curStore.maCat} />

        {/* <CloseButton onPress={() => {}} color="black" /> */}

        {/* <Image
                  style={styles.cardHeaderElement}
                  source={require("./assets/saks.png")}
                  resizeMode="cover"
                />
                <Image
                  style={styles.cardHeaderElement}
                  source={require("./assets/button/close_square_button.png")}
                  resizeMode="cover"
                /> */}
      </View>
      <View style={styles.detailContainer}>
        <Example
          navigation={navigation}
          data={curStore}
          update={setCurStore}
        ></Example>
      </View>
      <View style={styles.footer}>
        <ToggleIcon First={UnfilledHeart} Second={FilledHeart} />
        <TouchableOpacity style={styles.button}>
          <Text>방명록 남기기</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text>커뮤니티 문의</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MapDetail;

const styles = StyleSheet.create({
  pageContainer: { flex: 1, backgroundColor: "#fff" },
  imageContainer: { flex: 1 },
  detailContainer: { flex: 5 },
  visitLog: { flex: 1, paddingHorizontal: 20 },
  // cardHeaderElement: {
  //   // width: 44,
  //   // height: 44,cardHeaderElement

  //   borderRadius: 44 / 2,
  // },
  detailHeader: {
    // width: 44,
    // height: 44,
    // borderRadius: 44 / 2,
    // position: "absolute",
    flexDirection: "row",

    justifyContent: "space-between",
    // paddingTop: 30,
    paddingRight: 15,

    // position: "absolute",
    // paddingTop: 7,
    // paddingRight: 15,
    // left: 0,
    // right: 0,
    backgroundColor: "#fff",
    zIndex: 999,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  inputContainer: {
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 24,
    borderBottomWidth: 1,
    borderBotomColor: "#cccccc",
    padding: 16,
    flex: 1,
  },
  footer: {
    flex: 0.4,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderTopWidth: 1,
    // borderBotomColor: "#cccccc",
    padding: 16,
  },
  button: {
    borderWidth: 2,
    backgroundColor: "#D8D8D8",
    borderRadius: 30,
    padding: 10,
  },
});
