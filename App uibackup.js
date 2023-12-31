import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screens/MainScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: "상세보기" }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
