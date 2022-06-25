import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import IndividualItemScreen from "./screens/IndividualItemScreen";
import LoginScreen from "./screens/LoginScreen";
import MapScreen from "./screens/MapScreen";
import RetailerScreen from "./screens/RetailerScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Retailer" component={RetailerScreen} />
      <Stack.Screen name="Maps" component={MapScreen} />
      <Stack.Screen name="IndividualItem" component={IndividualItemScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
