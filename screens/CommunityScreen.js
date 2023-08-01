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
import Icon from "react-native-vector-icons/AntDesign";

const CommunityScreen = ({ navigation, data, update }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.favContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <Category name={"전체"}></Category>
          <Category name={"음식"}></Category>
          <Category name={"카페"}></Category>
          <Category name={"편의점"}></Category>
          <Category name={"미용실"}></Category>
        </View>
        <View style={{ paddingRight: 20, marginTop: 0 }}>
          <View style={styles.favItemBox}>
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
                    <Category name={"음식"}></Category>
                    <Category name={"양식"}></Category>
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
            <View style={styles.itemInnerContent}>
              <Text>
                이 식당을 강력하게 추천 드리고 싶어요. 사장님이 정말
                친절하셔서요.휠체어가 다니기 좋아요.
              </Text>
            </View>
            <View style={styles.itemFooterBar}>
              <Text style={styles.itemFooter}>공감</Text>
              <Text style={styles.itemFooter}>댓글</Text>
              <Text style={styles.itemFooter}>작성자</Text>
              <Text style={styles.itemFooter}>얼마 전</Text>
            </View>
          </View>
        </View>
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
    padding: 10,
    paddingTop: -10,
    flex: 1,
  },
  favItemBox: {
    borderWidth: 1,
    pading: 5,
    alignItems: "center",
  },
  favItem: {
    height: 150,
    borderWidth: 1,

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
    marginBottom: 20,
  },
  detail: {
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  itemFooterBar: {
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "space-between",
  },
  itemFooter: {
    flex: 1,
    paddingHorizontal: 20,
  },
  itemInnerContent: { padding: 5, borderWidth: 1 },
});

export default CommunityScreen;
