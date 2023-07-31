import React from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ListRenderItem,
  FlatList,
} from "react-native";
import Example from "./Example";

const MapDetail = ({ navigation, route }) => {
  useEffect(() => {
    navigation.setOptions({
      title: route.params.title,
      data: route.params.data,
    });
  }, []);

  return (
    <View style={styles.pageContainer}>
      {/* <View style={styles.imageContainer}>
        <Text>Image</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text>detail</Text>
      </View>
      {/* <Text>Detail Content, {route.params.info},</Text> */}
      {/* <Button
        title="go to the list screen"
        onPress={() =>
           navigation.navigate("MapDetail")}
      /> */}
      <View>
        <View style={styles.cardHeader}>
          <View style={{ flexDirection: "row" }}>
            <BackspaceButton
              onPress={() => {
                setDetailVisible(false);
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
      </View>
      <Example
        data={route.params.data}
        navigation={route.params.navigation}
      ></Example>
    </View>
  );
};

export default MapDetail;

const styles = StyleSheet.create({
  pageContainer: { flex: 1 },
  imageContainer: { flex: 3 },
  detailContainer: { flex: 4 },
});
