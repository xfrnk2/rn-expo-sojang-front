import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/Fontisto";

import GoogleMap from "./GoogleMap";
import MapHome from "./MapHome";
const Tab = createBottomTabNavigator();
// https://oblador.github.io/react-native-vector-icons/
function HomeScreen() {
  return <Text>Home</Text>;
}

function FavoriteScreen() {
  return <Text>Favorite</Text>;
}

function RecommendScreen() {
  return <Text>Recommnad</Text>;
}

function CommunityScreen() {
  return <Text>Community</Text>;
}

const BottomTabNavigationApp = ({ navigation }) => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
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
          title: "지도",
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
        name="recommend"
        component={RecommendScreen}
        options={{
          title: "추천",
          tabBarIcon: ({ color, size }) => (
            <Icon name="recommend" color={color} size={size} />
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
    </Tab.Navigator>
  );
};

export default BottomTabNavigationApp;
