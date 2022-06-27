import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import IndividualItemScreen from "./screens/IndividualItemScreen";
import ItemCarousel from "./screens/ItemCarousel";
import LoginScreen from "./screens/LoginScreen";
import MapScreen from "./screens/MapScreen";
import RetailerScreen from "./screens/RetailerScreen";
import SupplierInfoScreen from "./screens/SupplierInfoScreen";

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
      <Stack.Screen name="SupplierInfoScreen" component={SupplierInfoScreen} />
      <Stack.Screen name="Maps" component={MapScreen} />
      <Stack.Screen name="IndividualItem" component={IndividualItemScreen} />
      <Stack.Screen name="ItemCarousel" component={ItemCarousel} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
