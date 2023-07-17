import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Button, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MapScreen from "./MapScreen";
const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#fb8c00",
        tabBarShowLabel: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "홈",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "음식점",
          tabBarIcon: ({ color, size }) => (
            <Icon name="notifications" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Map2"
        component={MapScreen}
        options={{
          title: "생활시설",
          tabBarIcon: ({ color, size }) => (
            <Icon name="notifications" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: "검색",
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          title: "메시지",
          tabBarIcon: ({ color, size }) => (
            <Icon name="message" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="상세보기"
        onPress={() => navigation.push("Detail", { id: 1 })}
      />
    </View>
  );
}

function NotificationScreen() {
  return <Text>Notification</Text>;
}

function MessageScreen() {
  return <Text>Message</Text>;
}

export default MainScreen;
