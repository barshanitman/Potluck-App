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
import { BlurView } from "expo-blur";

const CartPopup = () => {
  const setCartPageStatus = cartStore((state) => state.setCartPageActivated);
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
          height: "70%",
        }}
      >
        <Text>hello</Text>
      </View>
      <TouchableOpacity
        onPress={setCartPageStatus}
        style={{
          position: "absolute",
          top: "20%",
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
  header: { height: "30%" },
});
