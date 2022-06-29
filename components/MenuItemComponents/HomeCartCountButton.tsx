import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Colours } from "../../assets/utils/colours";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";
import { useStore } from "zustand";
import { orderStore } from "../../stores/OrderStore";

const HomeCartCountButton = () => {
  const CartQuantity = orderStore((state) => state.CartQuantity);
  const navigationRoute = useNavigation();
  let [fontsLoaded] = useFonts([
    Poppins_600SemiBold,
    Poppins_300Light,
    Poppins_400Regular,
  ]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigationRoute.goBack();
        }}
        style={{
          backgroundColor: "white",
          height: 40,
          width: 40,
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Entypo name="shopping-cart" size={24} color={"black"} />
        </View>
        {CartQuantity > 0 ? (
          <View style={styles.counterDisplay}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontFamily: "Poppins_600SemiBold",
              }}
            >
              {CartQuantity}
            </Text>
          </View>
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default HomeCartCountButton;

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    // top: 23,
    // right: 25,
    zIndex: 200,
    flexDirection: "row",
  },
  counterDisplay: {
    position: "absolute",
    top: -2,
    right: -7,
    height: 20,
    width: 20,
    borderRadius: 100,
    backgroundColor: Colours.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
