import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import CrossButton from "./MenuItemComponents/CrossButton";
import { Feather } from "@expo/vector-icons";
import { cartStore } from "../stores/OrderStore";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";
import { BlurView } from "expo-blur";
import { Colours } from "../assets/utils/colours";
import { ScrollView } from "react-native-gesture-handler";
import CartItemRow from "./CartPageComponents/CartItemRow";
import SubTotal from "./CartPageComponents/SubTotal";
import Tax from "./CartPageComponents/Tax";
import TotalCart from "./CartPageComponents/TotalCart";
import PlaceOrder from "./CartPageComponents/PlaceOrder";

const CartPopup = () => {
  const setCartPageStatus = cartStore((state) => state.setCartPageActivated);
  let [fontsLoaded] = useFonts([
    Poppins_600SemiBold,
    Poppins_300Light,
    Poppins_400Regular,
  ]);

  return (
    <View style={styles.container}>
      <BlurView style={styles.header}>
        {/* <Animated.Image
          source={require("../assets/WhiteHeader.jpg")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="cover"
          blurRadius={50}
        /> */}
      </BlurView>
      <View
        style={{
          backgroundColor: "white",
          height: "75%",
          padding: "5%",
        }}
      >
        <View
          style={{
            marginTop: "2%",
            borderBottomColor: "gray",
            borderBottomWidth: 0.2,
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: 24,
              marginBottom: 5,
            }}
          >
            Your Items
          </Text>
        </View>
        <View style={{ maxHeight: "40%" }}>
          <ScrollView
            style={{
              borderBottomColor: "gray",
              borderBottomWidth: 0.2,
              paddingBottom: 20,
            }}
          >
            <CartItemRow quantity={3} name={"Rose Cupcake"} price={13.5} />
            <CartItemRow quantity={5} name={"Chocolate Brownie"} price={8} />
            {/* <CartItemRow quantity={5} name={"Chocolate Brownie"} price={8} />
            <CartItemRow quantity={5} name={"Chocolate Brownie"} price={8} />
            <CartItemRow quantity={5} name={"Chocolate Brownie"} price={8} />
            <CartItemRow quantity={5} name={"Chocolate Brownie"} price={8} />
            <CartItemRow quantity={5} name={"Chocolate Brownie"} price={8} />
            <CartItemRow quantity={5} name={"Chocolate Brownie"} price={8} />
            <CartItemRow quantity={5} name={"Chocolate Brownie"} price={8} /> */}
          </ScrollView>
        </View>
        <View style={{ marginTop: "5%", padding: 5 }}>
          <SubTotal subTotal={25.5} />
          <View style={{ marginTop: "3%" }}>
            <Tax tax={0.5} />
          </View>
          <View style={{ marginTop: "3%" }}>
            <TotalCart totalPrice={26.5} />
          </View>
        </View>
        <PlaceOrder />
      </View>
      <TouchableOpacity
        onPress={setCartPageStatus}
        style={{
          position: "absolute",
          top: "15%",
          left: "45%",
          backgroundColor: "white",
          height: 40,
          width: 40,
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Feather name="x" size={27} color={"black"} />
      </TouchableOpacity>
    </View>
  );
};

export default CartPopup;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  header: { height: "25%" },
});
