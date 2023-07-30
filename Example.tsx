import React from "react";
import {
  View,
  StyleSheet,
  ListRenderItem,
  Text,
  TextInput,
} from "react-native";
import { Tabs } from "react-native-collapsible-tab-view";

const HEADER_HEIGHT = 240;

const DATA = [0, 1, 2, 3, 4];
const identity = (v: unknown): string => v + "";

const Header = ({ navigation, data, update }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <View style={styles.boxcontent}>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text>이름</Text>
            <Text>{data.isCert && "인증된 가게에요"}</Text>
          </View>
          <Text>{data.name}</Text>
        </View>
        <View style={styles.boxcontent}>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text>주소</Text>
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
      </View>
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
      renderHeader={() => <Header data={props.data} />}
      headerHeight={HEADER_HEIGHT} // optional
    >
      <Tabs.Tab name="방명록">
        <Tabs.FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={identity}
          style={{ flex: 1 }}
        />
        <View style={styles.inputContainer}>
          <Text>Comment</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Your course goalas!"
            onChangeText={() => {}}
            value={"text"}
          ></TextInput>
        </View>
      </Tabs.Tab>
      <Tabs.Tab name="쿠폰">
        <Tabs.ScrollView>
          {/* <View style={[styles.box, styles.boxA]} /> */}
          <View style={[styles.box, styles.boxB]} />
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
    height: 250,
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
    backgroundColor: "#2196f3",
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
});

export default Example;
