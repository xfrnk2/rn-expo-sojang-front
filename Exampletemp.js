import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Tabs } from "react-native-collapsible-tab-view";

const Example = ({ navigation, data, update }) => {
  return (
    <Tabs.Container>
      <Tabs.Tab name="상세">
        <View style={styles.box}>
          <View style={styles.boxcontent}>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text>주소</Text>
              <Text>{data.isCert && "인증된 가게에요"}</Text>
            </View>
            <Text>{data.address}</Text>
          </View>
          <View style={styles.boxcontent}>
            <View>
              <Text>시설</Text>
            </View>
            <Text>
              {data.hasParkingLot && "전용주차장 "}
              {data.hasElevator && "엘리베이터 "}
              {data.hasToilet && "전용화장실"}
            </Text>
          </View>
          <View style={styles.boxcontent}>
            <View>
              <Text>그 외</Text>
            </View>
            <Text>.</Text>
          </View>
          <View style={styles.boxcontent}>
            <View>
              <Text>방명록</Text>
            </View>
            <Text>.</Text>
          </View>
          {/* <ScrollView style={styles.visitLog}>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>12344</Text>
          </ScrollView> */}
        </View>
        {/* <Tabs.ScrollView>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>123</Text>
          <Text>12344</Text>
        </Tabs.ScrollView> */}
      </Tabs.Tab>
      <Tabs.Tab name="쿠폰">
        <Tabs.ScrollView>
          <View style={[styles.box, styles.boxA]} />
          <View style={[styles.box, styles.boxB]} />
        </Tabs.ScrollView>
      </Tabs.Tab>
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
});

export default Example;
