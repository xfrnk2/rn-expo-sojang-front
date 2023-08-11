import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialTabBar, Tabs } from "react-native-collapsible-tab-view";
import Certification from "./components/Certification";
import Facility from "./components/Facility";
const DATA = [0, 1, 2, 3, 4];

const TabView = ({ navigation, data }) => {
  return (
    <Tabs.Container
      renderTabBar={(props) => (
        <MaterialTabBar
          {...props}
          indicatorStyle={{ backgroundColor: "#ff671b" }}
        /> //Here
      )}
    >
      <Tabs.Tab name="상세" style={{ fontSize: 15 }}>
        <TouchableOpacity
          onPress={() => {
            console.log("goto detail");
            navigation.navigate("MapDetail", {
              data: data,
              title: data.name,
            });
          }}
        >
          <View style={styles.box}>
            <View style={styles.boxcontent}>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                <Text
                  style={[
                    styles.textTitle,
                    { alignItems: "flex-end", justifyContent: "flex-end" },
                  ]}
                >
                  주소
                </Text>
                <Text>
                  {data.isCert && <Certification title={"인증된 가게에요"} />}
                </Text>
              </View>
              <Text style={styles.textContent}>{data.address}</Text>
            </View>
            <View style={styles.boxcontent}>
              <View>
                <Text style={styles.textTitle}>시설</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                {data.hasParkingLot && <Facility title={"우선주차장"} />}
                {data.hasElevator && <Facility title={"엘리베이터"} />}
                {data.hasToilet && <Facility title={"장애인용 화장실"} />}
              </View>
            </View>
            <View style={styles.boxcontent}>
              <View>
                <Text style={styles.textTitle}>그 외</Text>
              </View>
              <Text style={styles.textContent}></Text>
            </View>
            <View style={styles.boxcontent}>
              <View>
                <Text style={styles.textTitle}>방명록</Text>
              </View>
              <Text style={styles.textContent}></Text>
            </View>
          </View>
        </TouchableOpacity>
      </Tabs.Tab>
      <Tabs.Tab name="쿠폰" style={{ fontSize: 15 }}>
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
  boxcontent: { marginBottom: 10 },
  boxA: {
    backgroundColor: "white",
  },
  boxB: {
    backgroundColor: "#D8D8D8",
  },
  textTitle: {
    color: "#ac7448",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textContent: {
    fontSize: 14,
  },
});

export default TabView;
