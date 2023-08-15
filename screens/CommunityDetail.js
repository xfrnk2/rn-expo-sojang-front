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

import BackspaceButton from "../components/BackspaceButton";
import Category from "../components/Category";
import FilledHeart from "../components/FilledHeart";
import UnfilledHeart from "../components/UnfilledHeart";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ToggleIcon } from "../ToggleIcon";
import StorePreviewItemNoRadius from "../components/storePreview/StorePreviewItemNoRadius";
import ContentBox from "../components/ContentBox";
import CommunityFooterBox from "../components/CommunityFooterBox";
import AuthorBox from "../components/AuthorBox";
import CommentsBox from "../components/CommentsBox";
const CommunityDetail = ({ navigation, route }) => {
  // const update = route.params.update;
  //   const [curStore, setCurStore] = useState(route.params.data);
  useEffect(() => {
    // navigation.setOptions({
    //   title: route.params.title,
    // });
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

          <Text
            style={{
              marginLeft: 10,
              marginTop: 14,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {/* {curStore.name} {curStore.isCert && "☆"} */}
          </Text>
        </View>
        {/* <Category name={curStore.maCat} /> */}

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
      {/* <View style={{ paddingHorizontal: 10 }}> */}
      <View style={{ flex: 1 }}>
        <StorePreviewItemNoRadius navigation={navigation} />
        <AuthorBox name={"음식점"} />
        <ContentBox />
        <CommunityFooterBox />
        <CommentsBox />
        {/* <View style={styles.itemInnerContent}>
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
        </View> */}
      </View>

      {/* <View style={styles.footer}>
        <ToggleIcon First={UnfilledHeart} Second={FilledHeart} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("WritingPage", {
              // data: data,
              // navigation: navigation,
            });
          }}
        >
          <Text style={styles.buttonText}>댓글 남기기</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>공감하기</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default CommunityDetail;

const styles = StyleSheet.create({
  pageContainer: { flex: 1 },

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

    // borderTopWidth: 1,
    // borderBotomColor: "#cccccc",
    padding: 16,
  },
  button: {
    // borderWidth: 2,
    // backgroundColor: "#F2E4C5",
    backgroundColor: "#e8e8e8",
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 500,
  },
  favItemBox: {
    borderWidth: 1,
    pading: 5,
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 10,
    borderColor: "#e8e8e8",
    shadowColor: "#ccc",
    shadowOffset: { width: "100%", height: "100%" },
    shadowOpacity: 0.8,
    shadowRadius: 10,
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
  favItemContent: {
    marginLeft: 20,
    flexDirection: "column",
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
