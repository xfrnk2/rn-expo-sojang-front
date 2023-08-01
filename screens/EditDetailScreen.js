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
import Icon from "react-native-vector-icons/AntDesign";
import BackspaceButton from "../components/BackspaceButton";

const EditDetailScreen = ({ navigation, route }) => {
  const [curStore, setCurStore] = useState(route.params.data);
  return (
    <View style={styles.container}>
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
            {curStore.name} {curStore.isCert && "☆"}
          </Text>
        </View>
        <Category name={curStore.maCat} />

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default EditDetailScreen;
