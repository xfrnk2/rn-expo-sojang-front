// import { View, Text, ScrollView, StyleSheet } from "react-native";

// const FavoriteScreen = () => {
//   return (
// <ScrollView style={styles.favContainer}>
//   <View style={styles.favItem}>
//     <Text>123</Text>
//   </View>
//   <View style={styles.favItem}>
//     <Text>123</Text>
//   </View>
//   <View style={styles.favItem}>
//     <Text>123</Text>
//   </View>
//   <View style={styles.favItem}>
//     <Text>123</Text>
//   </View>
// </ScrollView>
//   );
// };

// export default FavoriteScreen;

// const styles = StyleSheet.create({
//   favContainer: {
//     padding: 10,
//     flex: 1,
//   },
//   favItem: {
//     height: 200,
//     borderWidth: 1,
//     pading: 5,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { MaterialTabBar, Tabs } from "react-native-collapsible-tab-view";
import Category from "../components/Category";
import SelectedCategory from "../components/SelectedCategory";
import FoodCategory from "../components/FoodCategory";
import Icon from "react-native-vector-icons/AntDesign";

const FavoriteScreen = ({ navigation, data, update }) => {
  const [curFoodCategory, setCurFoodCategory] = useState(null);
  const changeCurFoodCategory = (value) => {
    setCurFoodCategory(value);
  };
  return (
    <View style={{ flex: 1 }}>
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
        <Text style={{ fontSize: 20, fontWeight: 700 }}>소장</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 17, fontWeight: 600 }}>최신 등록순 </Text>
          <Icon name="down" size={12} style={{ paddingTop: 6 }} />
        </View>
      </View>
      <Tabs.Container
        pagerProps={{ scrollEnabled: false }}
        renderTabBar={(props) => (
          <MaterialTabBar
            {...props}
            indicatorStyle={{ backgroundColor: "red" }}
          /> //Here
        )}
      >
        <Tabs.Tab name="음식">
          <View style={styles.favContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: 2,
                paddingBottom: 4,
                backgroundColor: "white",
                shadowOpacity: 0.7,
                shadowColor: "#000",
                shadowOffset: { width: 100, height: 100 },
                elevation: 3,
              }}
            >
              <FoodCategory
                name={"전체"}
                onPress={setCurFoodCategory}
                value={curFoodCategory}
              ></FoodCategory>
              <FoodCategory
                name={"한식"}
                onPress={setCurFoodCategory}
                value={curFoodCategory}
              ></FoodCategory>
              <FoodCategory
                name={"양식"}
                onPress={setCurFoodCategory}
                value={curFoodCategory}
              ></FoodCategory>
              <FoodCategory
                name={"중식"}
                onPress={setCurFoodCategory}
                value={curFoodCategory}
              ></FoodCategory>
              <FoodCategory
                name={"동남아시아식"}
                onPress={setCurFoodCategory}
                value={curFoodCategory}
              ></FoodCategory>
            </View>
            <Tabs.ScrollView style={{ paddingHorizontal: 10, marginTop: 0 }}>
              <View style={styles.favItem}>
                <View style={styles.icon}>
                  <Image
                    source={require("../assets/no-image.png")}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 3,
                      borderWidth: 2,
                      borderColor: "grey",
                    }}
                  />
                </View>
                <View style={styles.favItemContent}>
                  <View style={styles.contentHeader}>
                    <View style={{ flexDirection: "row" }}>
                      <SelectedCategory name={"음식"}></SelectedCategory>
                      <SelectedCategory name={"양식"}></SelectedCategory>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Category name={"인증O"}></Category>
                      <Category name={"쿠폰O"}></Category>
                    </View>
                  </View>
                  <View style={styles.detail}>
                    <Text>☆ 레드스모크하우스</Text>
                    <Text>주소: 경기도 김포시 장기동 1902-1</Text>
                  </View>
                </View>
              </View>
              <View style={styles.favItem}>
                <View style={styles.icon}>
                  <Image
                    source={require("../assets/no-image.png")}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 3,
                      borderWidth: 2,
                      borderColor: "grey",
                    }}
                  />
                </View>
                <View style={styles.favItemContent}>
                  <View style={styles.contentHeader}>
                    <View style={{ flexDirection: "row" }}>
                      <SelectedCategory name={"음식"}></SelectedCategory>
                      <SelectedCategory name={"양식"}></SelectedCategory>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Category name={"인증O"}></Category>
                      <Category name={"쿠폰O"}></Category>
                    </View>
                  </View>
                  <View style={styles.detail}>
                    <Text>☆ 레드스모크하우스</Text>
                    <Text>주소: 경기도 김포시 장기동 1902-1</Text>
                  </View>
                </View>
              </View>
              <View style={styles.favItem}>
                <View style={styles.icon}>
                  <Image
                    source={require("../assets/no-image.png")}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 3,
                      borderWidth: 2,
                      borderColor: "grey",
                    }}
                  />
                </View>
                <View style={styles.favItemContent}>
                  <View style={styles.contentHeader}>
                    <View style={{ flexDirection: "row" }}>
                      <SelectedCategory name={"음식"}></SelectedCategory>
                      <SelectedCategory name={"양식"}></SelectedCategory>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Category name={"인증O"}></Category>
                      <Category name={"쿠폰O"}></Category>
                    </View>
                  </View>
                  <View style={styles.detail}>
                    <Text>☆ 레드스모크하우스</Text>
                    <Text>주소: 경기도 김포시 장기동 1902-1</Text>
                  </View>
                </View>
              </View>
              <View style={styles.favItem}>
                <View style={styles.icon}>
                  <Image
                    source={require("../assets/no-image.png")}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 3,
                      borderWidth: 2,
                      borderColor: "grey",
                    }}
                  />
                </View>
                <View style={styles.favItemContent}>
                  <View style={styles.contentHeader}>
                    <View style={{ flexDirection: "row" }}>
                      <SelectedCategory name={"음식"}></SelectedCategory>
                      <SelectedCategory name={"양식"}></SelectedCategory>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Category name={"인증O"}></Category>
                      <Category name={"쿠폰O"}></Category>
                    </View>
                  </View>
                  <View style={styles.detail}>
                    <Text>☆ 레드스모크하우스</Text>
                    <Text>주소: 경기도 김포시 장기동 1902-1</Text>
                  </View>
                </View>
              </View>
            </Tabs.ScrollView>
          </View>
        </Tabs.Tab>
        <Tabs.Tab name="카페">
          <View style={styles.favContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: 2,
              }}
            >
              <Category name={"전체"}></Category>
            </View>
            <Tabs.ScrollView style={{ paddingRight: 20, marginTop: 0 }}>
              <View style={styles.favItem}>
                <View style={styles.icon}>
                  <Image
                    source={require("../assets/no-image.png")}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 3,
                      borderWidth: 2,
                      borderColor: "grey",
                    }}
                  />
                </View>
                <View style={styles.favItemContent}>
                  <View style={styles.contentHeader}>
                    <View style={{ flexDirection: "row" }}>
                      <SelectedCategory name={"음식"}></SelectedCategory>
                      <SelectedCategory name={"양식"}></SelectedCategory>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Category name={"인증O"}></Category>
                      <Category name={"쿠폰O"}></Category>
                    </View>
                  </View>
                  <View style={styles.detail}>
                    <Text>☆ 레드스모크하우스</Text>
                    <Text>주소: 경기도 김포시 장기동 1902-1</Text>
                  </View>
                </View>
              </View>
              <View style={styles.favItem}>
                <View style={styles.icon}>
                  <Image
                    source={require("../assets/no-image.png")}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 3,
                      borderWidth: 2,
                      borderColor: "grey",
                    }}
                  />
                </View>
                <View style={styles.favItemContent}>
                  <View style={styles.contentHeader}>
                    <View style={{ flexDirection: "row" }}>
                      <SelectedCategory name={"음식"}></SelectedCategory>
                      <SelectedCategory name={"양식"}></SelectedCategory>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Category name={"인증O"}></Category>
                      <Category name={"쿠폰O"}></Category>
                    </View>
                  </View>
                  <View style={styles.detail}>
                    <Text>☆ 레드스모크하우스</Text>
                    <Text>주소: 경기도 김포시 장기동 1902-1</Text>
                  </View>
                </View>
              </View>
              <View style={styles.favItem}>
                <View style={styles.icon}>
                  <Image
                    source={require("../assets/no-image.png")}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 3,
                      borderWidth: 2,
                      borderColor: "grey",
                    }}
                  />
                </View>
                <View style={styles.favItemContent}>
                  <View style={styles.contentHeader}>
                    <View style={{ flexDirection: "row" }}>
                      <SelectedCategory name={"음식"}></SelectedCategory>
                      <SelectedCategory name={"양식"}></SelectedCategory>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Category name={"인증O"}></Category>
                      <Category name={"쿠폰O"}></Category>
                    </View>
                  </View>
                  <View style={styles.detail}>
                    <Text>☆ 레드스모크하우스</Text>
                    <Text>주소: 경기도 김포시 장기동 1902-1</Text>
                  </View>
                </View>
              </View>
              <View style={styles.favItem}>
                <View style={styles.icon}>
                  <Image
                    source={require("../assets/no-image.png")}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 3,
                      borderWidth: 2,
                      borderColor: "grey",
                    }}
                  />
                </View>
                <View style={styles.favItemContent}>
                  <View style={styles.contentHeader}>
                    <View style={{ flexDirection: "row" }}>
                      <SelectedCategory name={"음식"}></SelectedCategory>
                      <SelectedCategory name={"양식"}></SelectedCategory>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Category name={"인증O"}></Category>
                      <Category name={"쿠폰O"}></Category>
                    </View>
                  </View>
                  <View style={styles.detail}>
                    <Text>☆ 레드스모크하우스</Text>
                    <Text>주소: 경기도 김포시 장기동 1902-1</Text>
                  </View>
                </View>
              </View>
            </Tabs.ScrollView>
          </View>
        </Tabs.Tab>

        <Tabs.Tab name="편의점">
          <View style={styles.favContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: 2,
              }}
            >
              <Category name={"전체"}></Category>
            </View>
            <Tabs.ScrollView style={{ paddingRight: 20, marginTop: 0 }}>
              <View style={styles.favItem}>
                <View style={styles.icon}>
                  <Image
                    source={require("../assets/no-image.png")}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 3,
                      borderWidth: 2,
                      borderColor: "grey",
                    }}
                  />
                </View>
                <View style={styles.favItemContent}>
                  <View style={styles.contentHeader}>
                    <View style={{ flexDirection: "row" }}>
                      <SelectedCategory name={"음식"}></SelectedCategory>
                      <SelectedCategory name={"양식"}></SelectedCategory>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Category name={"인증O"}></Category>
                      <Category name={"쿠폰O"}></Category>
                    </View>
                  </View>
                  <View style={styles.detail}>
                    <Text>☆ 레드스모크하우스</Text>
                    <Text>주소: 경기도 김포시 장기동 1902-1</Text>
                  </View>
                </View>
              </View>
              <View style={styles.favItem}>
                <View style={styles.icon}>
                  <Image
                    source={require("../assets/no-image.png")}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 3,
                      borderWidth: 2,
                      borderColor: "grey",
                    }}
                  />
                </View>
                <View style={styles.favItemContent}>
                  <View style={styles.contentHeader}>
                    <View style={{ flexDirection: "row" }}>
                      <SelectedCategory name={"음식"}></SelectedCategory>
                      <SelectedCategory name={"양식"}></SelectedCategory>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Category name={"인증O"}></Category>
                      <Category name={"쿠폰O"}></Category>
                    </View>
                  </View>
                  <View style={styles.detail}>
                    <Text>☆ 레드스모크하우스</Text>
                    <Text>주소: 경기도 김포시 장기동 1902-1</Text>
                  </View>
                </View>
              </View>
              <View style={styles.favItem}>
                <View style={styles.icon}>
                  <Image
                    source={require("../assets/no-image.png")}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 3,
                      borderWidth: 2,
                      borderColor: "grey",
                    }}
                  />
                </View>
                <View style={styles.favItemContent}>
                  <View style={styles.contentHeader}>
                    <View style={{ flexDirection: "row" }}>
                      <SelectedCategory name={"음식"}></SelectedCategory>
                      <SelectedCategory name={"양식"}></SelectedCategory>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Category name={"인증O"}></Category>
                      <Category name={"쿠폰O"}></Category>
                    </View>
                  </View>
                  <View style={styles.detail}>
                    <Text>☆ 레드스모크하우스</Text>
                    <Text>주소: 경기도 김포시 장기동 1902-1</Text>
                  </View>
                </View>
              </View>
              <View style={styles.favItem}>
                <View style={styles.icon}>
                  <Image
                    source={require("../assets/no-image.png")}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 3,
                      borderWidth: 2,
                      borderColor: "grey",
                    }}
                  />
                </View>
                <View style={styles.favItemContent}>
                  <View style={styles.contentHeader}>
                    <View style={{ flexDirection: "row" }}>
                      <SelectedCategory name={"음식"}></SelectedCategory>
                      <SelectedCategory name={"양식"}></SelectedCategory>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Category name={"인증O"}></Category>
                      <Category name={"쿠폰O"}></Category>
                    </View>
                  </View>
                  <View style={styles.detail}>
                    <Text>☆ 레드스모크하우스</Text>
                    <Text>주소: 경기도 김포시 장기동 1902-1</Text>
                  </View>
                </View>
              </View>
            </Tabs.ScrollView>
          </View>
        </Tabs.Tab>
        <Tabs.Tab name="미용실">
          <View style={styles.favContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: 2,
              }}
            >
              <Category name={"전체"}></Category>
            </View>
            <Tabs.ScrollView style={{ paddingRight: 20, marginTop: 0 }}>
              <View style={styles.favItem}>
                <View style={styles.icon}>
                  <Image
                    source={require("../assets/no-image.png")}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 3,
                      borderWidth: 2,
                      borderColor: "grey",
                    }}
                  />
                </View>
                <View style={styles.favItemContent}>
                  <View style={styles.contentHeader}>
                    <View style={{ flexDirection: "row" }}>
                      <SelectedCategory name={"음식"}></SelectedCategory>
                      <SelectedCategory name={"양식"}></SelectedCategory>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Category name={"인증O"}></Category>
                      <Category name={"쿠폰O"}></Category>
                    </View>
                  </View>
                  <View style={styles.detail}>
                    <Text>☆ 레드스모크하우스</Text>
                    <Text>주소: 경기도 김포시 장기동 1902-1</Text>
                  </View>
                </View>
              </View>
              <View style={styles.favItem}>
                <View style={styles.icon}>
                  <Image
                    source={require("../assets/no-image.png")}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 3,
                      borderWidth: 2,
                      borderColor: "grey",
                    }}
                  />
                </View>
                <View style={styles.favItemContent}>
                  <View style={styles.contentHeader}>
                    <View style={{ flexDirection: "row" }}>
                      <SelectedCategory name={"음식"}></SelectedCategory>
                      <SelectedCategory name={"양식"}></SelectedCategory>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Category name={"인증O"}></Category>
                      <Category name={"쿠폰O"}></Category>
                    </View>
                  </View>
                  <View style={styles.detail}>
                    <Text>☆ 레드스모크하우스</Text>
                    <Text>주소: 경기도 김포시 장기동 1902-1</Text>
                  </View>
                </View>
              </View>
              <View style={styles.favItem}>
                <View style={styles.icon}>
                  <Image
                    source={require("../assets/no-image.png")}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 3,
                      borderWidth: 2,
                      borderColor: "grey",
                    }}
                  />
                </View>
                <View style={styles.favItemContent}>
                  <View style={styles.contentHeader}>
                    <View style={{ flexDirection: "row" }}>
                      <SelectedCategory name={"음식"}></SelectedCategory>
                      <SelectedCategory name={"양식"}></SelectedCategory>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Category name={"인증O"}></Category>
                      <Category name={"쿠폰O"}></Category>
                    </View>
                  </View>
                  <View style={styles.detail}>
                    <Text>☆ 레드스모크하우스</Text>
                    <Text>주소: 경기도 김포시 장기동 1902-1</Text>
                  </View>
                </View>
              </View>
              <View style={styles.favItem}>
                <View style={styles.icon}>
                  <Image
                    source={require("../assets/no-image.png")}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 3,
                      borderWidth: 2,
                      borderColor: "grey",
                    }}
                  />
                </View>
                <View style={styles.favItemContent}>
                  <View style={styles.contentHeader}>
                    <View style={{ flexDirection: "row" }}>
                      <SelectedCategory name={"음식"}></SelectedCategory>
                      <SelectedCategory name={"양식"}></SelectedCategory>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Category name={"인증O"}></Category>
                      <Category name={"쿠폰O"}></Category>
                    </View>
                  </View>
                  <View style={styles.detail}>
                    <Text>☆ 레드스모크하우스</Text>
                    <Text>주소: 경기도 김포시 장기동 1902-1</Text>
                  </View>
                </View>
              </View>
            </Tabs.ScrollView>
          </View>
        </Tabs.Tab>
      </Tabs.Container>
    </View>
  );
};

const styles = StyleSheet.create({
  box: { marginTop: 70, paddingHorizontal: 25 },
  boxcontent: { paddingVertical: 10 },
  boxA: {
    backgroundColor: "white",
  },
  boxB: {
    backgroundColor: "#D8D8D8",
  },
  favContainer: {
    paddingVertical: 10,
    flex: 1,
    marginTop: 36,
  },
  favItem: {
    height: 150,
    borderWidth: 1,
    pading: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 5,
    borderRadius: 10,
    borderColor: "#e8e8e8",
    shadowColor: "#666666",
    shadowOffset: { width: 100, height: 100 },
    shadowOpacity: 0.8,
    backgroundColor: "white",
  },
  icon: {
    height: "75%",
    width: "30%",
  },
  favItemContent: {
    marginLeft: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  contentHeader: {
    flexDirection: "row",
    alignItems: "space-between",
    justifyContent: "space-between",
    marginTop: -2,
    marginBottom: 5,
  },
  detail: {
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});

export default FavoriteScreen;
