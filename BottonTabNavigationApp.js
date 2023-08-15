import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, StyleSheet, Image, View } from "react-native";
import Icon from "react-native-vector-icons/Octicons";

import GoogleMap from "./GoogleMap";
import Home from "./Home";
import { TouchableOpacity } from "react-native-gesture-handler";
import FavoriteScreen from "./screens/FavoriteScreen";
import CommunityScreen from "./screens/CommunityScreen";
const Tab = createBottomTabNavigator();
// https://oblador.github.io/react-native-vector-icons/

function MyPageScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("./assets/no-data.png")}
        style={{
          width: 50,
          height: 50,
        }}
      ></Image>
    </View>
  );
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
        tabBarShowLabel: false,
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
          tabBarIcon: ({ focused, color, size }) => (
            <View>
              <Icon name="home" color={color} size={30} />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                홈
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="favorite"
        component={FavoriteScreen}
        options={{
          title: "소장",
          tabBarIcon: ({ focused, color, size }) => (
            <View>
              <Icon name="heart" color={color} size={30} />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                소장
              </Text>
            </View>
          ),
          headerShown: false,
        }}
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
        name="Search"
        component={GoogleMap}
        options={{
          title: "탐색",

          tabBarIcon: ({ focused, color, size }) => (
            <View>
              <Icon name="feed-star" color={color} size={70} />
              {/* <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                  textAlign: "center",
                }}
              ></Text> */}
            </View>
          ),

          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("GoogleMap");
          },
        })}
      />

      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          title: "커뮤니티",

          tabBarIcon: ({ focused, color, size }) => (
            <View>
              <Icon name="comment" color={color} size={30} />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                Talk
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="myPage"
        component={MyPageScreen}
        options={{
          title: "마이페이지",

          tabBarIcon: ({ focused, color, size }) => (
            <View>
              <Icon name="person" color={color} size={37} />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                내정보
              </Text>
            </View>
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
