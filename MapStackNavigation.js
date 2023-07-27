import { createStackNavigator } from "@react-navigation/stack";
import GoogleMap from "./GoogleMap";
import MapDetail from "./MapDetail";
import BottomTabNavigationApp from "./BottonTabNavigationApp";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

const MapStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="BottomTabNavigationApp"
      >
        <Stack.Screen
          name="BottomTabNavigationApp"
          component={BottomTabNavigationApp}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="GoogleMap" component={GoogleMap} />
        <Stack.Screen
          name="MapDetail"
          component={MapDetail}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MapStackNavigation;
