import { createStackNavigator } from "@react-navigation/stack";
import GoogleMap from "./GoogleMap";
import MapDetail from "./MapDetail";
import BottomTabNavigationApp from "./BottonTabNavigationApp";
import { NavigationContainer } from "@react-navigation/native";
import EditDetailScreen from "./screens/EditDetailScreen.js";
import QRCodeScanner from "./QRCodeScanner";
import ResultList from "./ResultList";
import WritingPage from "./screens/WritingPage";
import CommunityDetail from "./screens/CommunityDetail";
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
          options={({ route }) => ({})}
        />
        <Stack.Screen
          name="EditDetailScreen"
          component={EditDetailScreen}
          options={({ route }) => ({})}
        />
        <Stack.Screen
          name="qrScanner"
          component={QRCodeScanner}
          options={({ route }) => ({})}
        />
        <Stack.Screen
          name="ResultList"
          component={ResultList}
          options={({ route }) => ({})}
        />
        <Stack.Screen
          name="WritingPage"
          component={WritingPage}
          options={({ route }) => ({})}
        />
        <Stack.Screen
          name="CommunityDetail"
          component={CommunityDetail}
          options={({ route }) => ({})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MapStackNavigation;
