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
import CommunityScreenItem from "../components/CommunityScreenItem";

const CommunityScreen = ({ navigation, data, update }) => {
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
        <Text style={{ fontSize: 20, fontWeight: 700 }}>커뮤니티</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 17, fontWeight: 600 }}>찾기 </Text>
          <Icon name="down" size={12} style={{ paddingTop: 6 }} />
        </View>
      </View>
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
            name={"음식점"}
            onPress={setCurFoodCategory}
            value={curFoodCategory}
          ></FoodCategory>
          <FoodCategory
            name={"카페"}
            onPress={setCurFoodCategory}
            value={curFoodCategory}
          ></FoodCategory>
          <FoodCategory
            name={"미용실"}
            onPress={setCurFoodCategory}
            value={curFoodCategory}
          ></FoodCategory>
          <FoodCategory
            name={"편의점"}
            onPress={setCurFoodCategory}
            value={curFoodCategory}
          ></FoodCategory>
        </View>
        <ScrollView style={{ paddingHorizontal: 10 }}>
          <View style={{ height: 46 }}></View>
          <CommunityScreenItem navigation={navigation} />
          <CommunityScreenItem navigation={navigation} />
        </ScrollView>
      </View>
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
    // paddingVertical: 10,
    flex: 1,
    // marginTop: 36,
  },
  favItemBox: {
    borderWidth: 1,
    pading: 5,
    // alignItems: "center",
    marginVertical: 5,
    borderRadius: 10,
    borderColor: "#e8e8e8",
    shadowColor: "#666666",

    shadowOffset: { width: 100, height: 100 },
    shadowOpacity: 0.8,
    backgroundColor: "white",
  },
  favItem: {
    height: 150,

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
  itemFooterBar: {
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "space-between",
    padding: 5,
  },
  itemFooter: {
    flex: 1,
    paddingHorizontal: 20,
  },
  itemInnerContent: {
    // borderWidth: 1,
    padding: 5,
  },
});

export default CommunityScreen;
