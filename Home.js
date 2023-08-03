import { View, StyleSheet } from "react-native";

import { BackgroundCarousel } from "./BackgroundCarousel";
import React, { Component } from "react";
import {
  Platform,
  FlatList,
  Text,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import ResultList from "./ResultList";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 140;
const CARD_WIDTH = width * 0.35;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
const images = [
  "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
];
const data = [
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "뱀부포레스트",
    address: "경기도 김포시 하성면",
    detail: {
      id: 3,
      name: "뱀부포레스트",
      maCat: "음식",
      miCat: "서양식",
      sido: "경기도",
      sigungu: "김포시",
      dong: "하성면",
      address: "경기도 김포시 하성면 전류리 67-34",
      lon: 126.661722810667,
      lat: 37.6968826880415,
      isCert: true,
      hasParkingLot: true,
      hasElevator: true,
      hasToilet: true,
    },
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "레드스모크하우스",
    address: "경기도 김포시 장기동",
    detail: {
      id: 2,
      name: "레드스모크하우스",
      maCat: "음식",
      miCat: "서양식",
      sido: "경기도",
      sigungu: "김포시",
      dong: "장기동",
      address: "경기도 김포시 장기동 1902-1",
      lon: 126.670780777331,
      lat: 37.6487005470003,
      isCert: true,
      hasParkingLot: false,
      hasElevator: false,
      hasToilet: false,
    },
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "타코박스김포",
    address: "경기도 김포시 풍무동",
    detail: {
      id: 1,
      name: "타코박스김포",
      maCat: "음식",
      miCat: "서양식",
      sido: "경기도",
      sigungu: "김포시",
      dong: "풍무동",
      address: "경기도 김포시 풍무동 191-2",
      lon: 126.726136342025,
      lat: 37.6068916938773,
      isCert: true,
      hasParkingLot: false,
      hasElevator: true,
      hasToilet: false,
    },
  },
  // {
  //   imageUrl: "http://via.placeholder.com/160x160",
  //   title: "something four",
  // },
  // {
  //   imageUrl: "http://via.placeholder.com/160x160",
  //   title: "something five",
  // },
  // {
  //   imageUrl: "http://via.placeholder.com/160x160",
  //   title: "something six",
  // },
];

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.pageContainer}>
      <View style={styles.MainScreen}>
        {/* <Text>This is Main Screen</Text> */}
        <View style={{ height: 200, marginBottom: 20 }}>
          <BackgroundCarousel images={images} />
        </View>
      </View>
      <View style={{ marginVertical: 10, marginLeft: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 400 }}>들러볼까요?</Text>
      </View>
      <View style={styles.categoryList}>
        <View style={styles.gridContainer}>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => {
              navigation.navigate("ResultList", {
                cat: "음식점",
              });
            }}
          >
            <Image
              style={{ width: "60%", height: "70%" }}
              source={require("./assets/icons/restaurant.png")}
            />
            <Text style={styles.gridItemText}>음식점</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => {
              navigation.navigate("ResultList", {
                cat: "카페",
              });
            }}
          >
            <Image
              style={{ width: "70%", height: "70%" }}
              source={require("./assets/icons/sign.png")}
            />
            <Text style={styles.gridItemText}>카페</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => {
              navigation.navigate("ResultList", {
                cat: "미용실",
              });
            }}
          >
            <Image
              style={{ width: "60%", height: "70%" }}
              source={require("./assets/icons/beauty.png")}
            />
            <Text style={styles.gridItemText}>미용실</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => {
              navigation.navigate("ResultList", {
                cat: "편의점",
              });
            }}
          >
            <Image
              style={{ width: "60%", height: "70%" }}
              source={require("./assets/icons/convenience-store.png")}
            />
            <Text style={styles.gridItemText}>편의점</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginVertical: 10, marginLeft: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 400 }}>소장을 추천해요</Text>
      </View>
      <View style={styles.menuButtonBox}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => {
            navigation.navigate("ResultList", {
              cat: "인증한 가게",
            });
          }}
        >
          <Text style={styles.menuButtonText}>인증 소장</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => {
            navigation.navigate("ResultList", {
              cat: "쿠폰이 있는 가게",
            });
          }}
        >
          <Text style={styles.menuButtonText}>쿠폰 소장</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardList}>
        <Text style={styles.cardListTitle}>인기 있는 가게</Text>
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
                  source={require("./assets/no-image.png")}
                  style={styles.cardImage}
                  resizeMode="cover"
                />

                <View style={styles.textContent}>
                  <Text numberOfLines={1} style={styles.cardtitle}>
                    {rowData.title}
                  </Text>
                  {/* <StarRating ratings={marker.rating} reviews={marker.reviews} /> */}
                  <Text numberOfLines={1} style={styles.cardDescription}>
                    {rowData.address}
                  </Text>
                  <View style={styles.button}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("MapDetail", {
                          data: rowData.detail,
                          title: rowData.name,
                        });
                      }}
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
                        방문하기
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
        <Text style={styles.cardListTitle}>새로 인증한 가게</Text>
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
                  source={require("./assets/no-image.png")}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <View style={styles.textContent}>
                  <Text numberOfLines={1} style={styles.cardtitle}>
                    {rowData.title}
                  </Text>
                  {/* <StarRating ratings={marker.rating} reviews={marker.reviews} /> */}
                  <Text numberOfLines={1} style={styles.cardDescription}>
                    {rowData.address}
                  </Text>
                  <View style={styles.button}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("MapDetail", {
                          data: rowData.detail,
                          title: rowData.name,
                        });
                      }}
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
                        방문하기
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

      <View style={{ height: 200 }}></View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  pageContainer: { flex: 1 },
  cardList: { flex: 2, padding: 10 },
  cardListTitle: { paddingHorizontal: 15, paddingBottom: 10, fontSize: 25 },
  MainScreen: { flex: 1 },
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
  gridContainer: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
    justifyContent: "center",
  },
  gridItem: {
    width: "20%", // is 50% of container width
    height: 70,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  gridItemText: {
    marginTop: 5,
  },
  categoryList: {
    flex: 2,
  },
  menuButtonBox: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 3,
  },
  menuButton: {
    borderRadius: 15,
    borderWidth: 2,
    height: 50,
    width: Dimensions.get("window").width / 2 - 5,

    alignItems: "center",
    justifyContent: "center",
    borderColor: "#D8D8D8",
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  menuButtonText: {
    fontSize: 15,
  },
});
