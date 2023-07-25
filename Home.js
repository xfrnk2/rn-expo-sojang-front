import { View, StyleSheet } from "react-native";

import React, { Component } from "react";
import {
  FlatList,
  Text,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const data = [
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something",
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something two",
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something three",
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something four",
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something five",
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something six",
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.MainScreen}>
        <Text>This is Main Screen</Text>
      </View>
      <View style={styles.cardList}>
        <Text>cardListStart</Text>
        <FlatList
          horizontal
          data={data}
          renderItem={({ item: rowData, index }) => {
            return (
              // <Card
              //   title={null}
              //   image={{ uri: rowData.imageUrl }}
              //   containerStyle={{ padding: 0, width: 160 }}
              // >
              //   <Text style={{ marginBottom: 10 }}>{rowData.title}</Text>
              // </Card>
              <View style={styles.card} key={index}>
                <Image
                  source={require("./assets/marker/map_marker_auth_bright.png")}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <View style={styles.textContent}>
                  <Text numberOfLines={1} style={styles.cardtitle}>
                    title
                  </Text>
                  {/* <StarRating ratings={marker.rating} reviews={marker.reviews} /> */}
                  <Text numberOfLines={1} style={styles.cardDescription}>
                    describsiton
                  </Text>
                  <View style={styles.button}>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={[
                        styles.signIn,
                        {
                          borderColor: "#FF6347",
                          borderWidth: 1,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.textSign,
                          {
                            color: "#FF6347",
                          },
                        ]}
                      >
                        Order Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
      <View style={styles.cardList}>
        <Text>cardListStart</Text>
        <FlatList
          horizontal
          data={data}
          renderItem={({ item: rowData, index }) => {
            return (
              // <Card
              //   title={null}
              //   image={{ uri: rowData.imageUrl }}
              //   containerStyle={{ padding: 0, width: 160 }}
              // >
              //   <Text style={{ marginBottom: 10 }}>{rowData.title}</Text>
              // </Card>
              <View style={styles.card} key={index}>
                <Image
                  source={require("./assets/marker/map_marker_auth_bright.png")}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <View style={styles.textContent}>
                  <Text numberOfLines={1} style={styles.cardtitle}>
                    title
                  </Text>
                  {/* <StarRating ratings={marker.rating} reviews={marker.reviews} /> */}
                  <Text numberOfLines={1} style={styles.cardDescription}>
                    describsiton
                  </Text>
                  <View style={styles.button}>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={[
                        styles.signIn,
                        {
                          borderColor: "#FF6347",
                          borderWidth: 1,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.textSign,
                          {
                            color: "#FF6347",
                          },
                        ]}
                      >
                        Order Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
      <View style={styles.cardList}>
        <Text>cardListStart</Text>
        <FlatList
          horizontal
          data={data}
          renderItem={({ item: rowData, index }) => {
            return (
              // <Card
              //   title={null}
              //   image={{ uri: rowData.imageUrl }}
              //   containerStyle={{ padding: 0, width: 160 }}
              // >
              //   <Text style={{ marginBottom: 10 }}>{rowData.title}</Text>
              // </Card>
              <View style={styles.card} key={index}>
                <Image
                  source={require("./assets/marker/map_marker_auth_bright.png")}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <View style={styles.textContent}>
                  <Text numberOfLines={1} style={styles.cardtitle}>
                    title
                  </Text>
                  {/* <StarRating ratings={marker.rating} reviews={marker.reviews} /> */}
                  <Text numberOfLines={1} style={styles.cardDescription}>
                    describsiton
                  </Text>
                  <View style={styles.button}>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={[
                        styles.signIn,
                        {
                          borderColor: "#FF6347",
                          borderWidth: 1,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.textSign,
                          {
                            color: "#FF6347",
                          },
                        ]}
                      >
                        Order Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  pageContainer: { flex: 1 },
  cardList: { flex: 2 },
  MainScreen: { flex: 2 },
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 2,
    padding: 10,
  },

  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },

  signIn: {
    width: "100%",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  textSign: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
