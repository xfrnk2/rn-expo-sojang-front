import React from "react";
import {
  View,
  StyleSheet,
  ListRenderItem,
  Text,
  TextInput,
} from "react-native";
import { MaterialTabBar, Tabs } from "react-native-collapsible-tab-view";
import { ToggleIcon } from "./ToggleIcon";
import FilledHeart from "./components/FilledHeart";
import UnfilledHeart from "./components/UnfilledHeart";
import { TouchableOpacity } from "react-native-gesture-handler";
import Coupon from "./Coupon";
import Facility from "./components/Facility";
import Certification from "./components/Certification";
const HEADER_HEIGHT = 340;

const DATA = [0, 1, 2, 3, 4];
const identity = (v: unknown): string => v + "";

const Header = ({ navigation, data }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <View style={styles.boxcontent}>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <Text style={styles.textTitle}>이름</Text>
            <Text>
              {data.isCert && <Certification title={"인증된 가게에요"} />}
            </Text>
          </View>
          <Text style={styles.textContent}>{data.name}</Text>
        </View>
        <View style={styles.boxcontent}>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
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
          <Text style={styles.textContent}>.</Text>
          {/* <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginBottom: 100,
            }}
          > */}
          {/* <TouchableOpacity
            style={styles.questionIsOwner}
            onPress={() => {
              navigation.navigate("EditDetailScreen", {
                data: data,
                navigation: navigation,
              });
            }}
          >
            <Text>이 가게의 주인이신가요?</Text>
          </TouchableOpacity> */}
          {/* </View> */}
        </View>
      </View>
      <TouchableOpacity
        style={styles.questionIsOwner}
        onPress={() => {
          navigation.navigate("EditDetailScreen", {
            data: data,
            navigation: navigation,
          });
        }}
      >
        <Text>이 가게의 주인이신가요?</Text>
      </TouchableOpacity>
    </View>
  );
};

const Example: React.FC = (props) => {
  const renderItem: ListRenderItem<number> = React.useCallback(({ index }) => {
    return (
      <View style={[styles.box, index % 2 === 0 ? styles.boxB : styles.boxA]} />
    );
  }, []);

  return (
    <Tabs.Container
      renderHeader={() => (
        <Header navigation={props.navigation} data={props.data} />
      )}
      headerHeight={HEADER_HEIGHT} // optional
      renderTabBar={(props) => (
        <MaterialTabBar
          {...props}
          indicatorStyle={{ backgroundColor: "red" }}
        /> //Here
      )}
    >
      <Tabs.Tab name="방명록">
        <Tabs.FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={identity}
          style={{ flex: 1 }}
        />
      </Tabs.Tab>
      <Tabs.Tab name="쿠폰">
        <Tabs.ScrollView>
          {/* <View style={[styles.box, styles.boxA]} /> */}
          <View style={[styles.box, styles.boxB]}>
            <Coupon
              title={"사이다 무료\n기한: 2023-07-31"}
              isDisabled={false}
            />
          </View>
          <View style={[styles.box, styles.boxB]}>
            <Coupon
              title={"1000원\n기한: 2023-08-31\n\n<<사용완료>>"}
              isDisabled={true}
            />
          </View>
        </Tabs.ScrollView>
      </Tabs.Tab>
    </Tabs.Container>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 250,
    width: "100%",
    paddingHorizontal: 25,
    marginTop: 10,
  },
  box: {
    height: 200,
    width: "100%",
    paddingHorizontal: 25,
    marginTop: 10,
  },
  boxA: {
    backgroundColor: "white",
  },
  boxB: {
    backgroundColor: "#D8D8D8",
  },
  header: {
    height: HEADER_HEIGHT,
    width: "100%",
    // backgroundColor: "#2196f3",
    // backgroundColor: "#D8D8D8",
    backgroundColor: "white",
    justifyContent: "space-between",
  },

  boxcontent: { paddingVertical: 10 },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  inputContainer: {
    flex: 0.1,
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBotomColor: "#cccccc",
    padding: 16,
  },
  footer: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBotomColor: "#cccccc",
    padding: 16,
  },
  button: {
    borderWidth: 2,
    backgroundColor: "#D8D8D8",
    borderRadius: 30,
    padding: 10,
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
  questionIsOwner: {
    padding: 12,
    flexDirection: "row",
    backgroundColor: "#F2E4C5",
    // backgroundColor: "grey",
    // marginBottom: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Example;
