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
import Category from "./components/Category";
import Icon from "react-native-vector-icons/AntDesign";

const ResultList = ({ navigation, route }) => {
  const [curCat, setCurCat] = useState(route.params.cat);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 85,
          backgroundColor: "#fff",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          //   paddingTop: 28,
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 700 }}>{curCat}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 17, fontWeight: 600 }}>최신 등록순 </Text>
          <Icon name="down" size={12} style={{ paddingTop: 6 }} />
        </View>
      </View>

      <View style={styles.favContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <Category name={"서울시"}></Category>
          <Category name={"노원구"}></Category>
          <Category name={"상계동"}></Category>
        </View>
        {curCat == "음식점" && (
          <ScrollView style={{ paddingRight: 20, marginTop: 0 }}>
            <View style={styles.favItem}>
              <View style={styles.icon}>
                <Image
                  source={require("./assets/no-image.png")}
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
            <View style={styles.favItem}>
              <View style={styles.icon}>
                <Image
                  source={require("./assets/no-image.png")}
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
            <View style={styles.favItem}>
              <View style={styles.icon}>
                <Image
                  source={require("./assets/no-image.png")}
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
            <View style={styles.favItem}>
              <View style={styles.icon}>
                <Image
                  source={require("./assets/no-image.png")}
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
          </ScrollView>
        )}
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
    flex: 1,
    // marginTop: 36,
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
});

export default ResultList;
