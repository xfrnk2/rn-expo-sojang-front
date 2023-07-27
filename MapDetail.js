import React from "react";
import { useEffect } from "react";
import { View, Text, Button, StyleSheet, ListRenderItem } from "react-native";
import Example from "./Example";

const MapDetail = ({ navigation, route }) => {
  useEffect(() => {
    navigation.setOptions({
      title: route.params.title,
    });
  }, []);

  return (
    <View style={styles.pageContainer}>
      {/* <View style={styles.imageContainer}>
        <Text>Image</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text>detail</Text>
      </View>
      {/* <Text>Detail Content, {route.params.info},</Text> */}
      {/* <Button
        title="go to the list screen"
        onPress={() => navigation.navigate("MapDetail")}
      /> */}
      <Example></Example>
    </View>
  );
};

export default MapDetail;

const styles = StyleSheet.create({
  pageContainer: { flex: 1 },
  imageContainer: { flex: 3 },
  detailContainer: { flex: 4 },
});
