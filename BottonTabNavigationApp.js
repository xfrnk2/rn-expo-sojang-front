import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, StyleSheet, Image, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/Fontisto";

import GoogleMap from "./GoogleMap";
import Home from "./Home";
import { TouchableOpacity } from "react-native-gesture-handler";
const Tab = createBottomTabNavigator();
// https://oblador.github.io/react-native-vector-icons/

function FavoriteScreen() {
  return <Text>Favorite</Text>;
}

function CommunityScreen() {
  return <Text>Community</Text>;
}

function MyPageScreen() {
  return <Text>Community</Text>;
}

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,

      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#e32f45",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const BottomTabNavigationApp = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "홈",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={GoogleMap}
        options={{
          title: "탐색",
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="map-search" color={color} size={size} />
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("GoogleMap");
          },
        })}
      />

      {/* <Tab.Screen
        name="mp"
        component={MyPageScreen}
        options={{
          title: "커뮤니티",
          tabBarIcon: ({ focused }) => {
            <Image
              source={require("./assets/saks.png")}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: "#ffffff",
              }}
            />;
          },
          tabBarIcon: ({ color, size }) => (
            <Icon3 name="hipchat" color={color} size={size} />
          ),
          tabBarButton: (props) => {
            <CustomTabBarButton {...props} />;
          },
        }}
      /> */}

      <Tab.Screen
        name="favorite2"
        component={MyPageScreen}
        options={{
          title: "ww",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("./assets/logo.png")}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? "#e32f45" : "#748c94",
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="favorite"
        component={FavoriteScreen}
        options={{
          title: "찜",
          tabBarIcon: ({ color, size }) => (
            <Icon name="favorite" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          title: "커뮤니티",
          tabBarIcon: ({ color, size }) => (
            <Icon3 name="hipchat" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{
          title: "내 정보",
          tabBarIcon: ({ color, size }) => (
            <Icon3 name="hipchat" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigationApp;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
