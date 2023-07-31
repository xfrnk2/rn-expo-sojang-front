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

import React from "react";
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

const FavoriteScreen = ({ navigation, data, update }) => {
  return (
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
        <ScrollView style={styles.favContainer}>
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
                <Category name={"음식"}></Category>
                <Category name={"양식"}></Category>
                <Category name={"인증O"}></Category>
                <Category name={"쿠폰O"}></Category>
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
                <Category name={"음식"}></Category>
                <Category name={"양식"}></Category>
                <Category name={"인증O"}></Category>
                <Category name={"쿠폰O"}></Category>
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
                <Category name={"음식"}></Category>
                <Category name={"양식"}></Category>
                <Category name={"인증O"}></Category>
                <Category name={"쿠폰O"}></Category>
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
                <Category name={"음식"}></Category>
                <Category name={"양식"}></Category>
                <Category name={"인증O"}></Category>
                <Category name={"쿠폰O"}></Category>
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
                <Category name={"음식"}></Category>
                <Category name={"양식"}></Category>
                <Category name={"인증O"}></Category>
                <Category name={"쿠폰O"}></Category>
              </View>
              <View style={styles.detail}>
                <Text>☆ 레드스모크하우스</Text>
                <Text>주소: 경기도 김포시 장기동 1902-1</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </Tabs.Tab>
      <Tabs.Tab name="카페">
        <Tabs.ScrollView>
          <View style={[styles.box, styles.boxA]} />
          <View style={[styles.box, styles.boxB]} />
        </Tabs.ScrollView>
      </Tabs.Tab>

      <Tabs.Tab name="편의점"></Tabs.Tab>
      <Tabs.Tab name="미용실"></Tabs.Tab>
    </Tabs.Container>
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
    padding: 10,
    flex: 1,
    marginTop: 50,
  },
  favItem: {
    height: 150,
    borderWidth: 1,
    pading: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    height: "75%",
    width: "30%",
  },
  favItemContent: {
    marginLeft: 20,
    flexDirection: "column",
  },
  contentHeader: {
    flexDirection: "row",
    alignItems: "space-between",
    justifyContent: "center",
  },
  detail: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FavoriteScreen;
