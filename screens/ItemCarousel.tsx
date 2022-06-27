import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  Animated,
} from "react-native";
import React from "react";

import cake from "../assets/ItemCarouselImages/cake.jpg";
import tart from "../assets/ItemCarouselImages/tart.jpg";
import icecream from "../assets/ItemCarouselImages/icecream.jpg";
import salmon from "../assets/ItemCarouselImages/salmon.jpg";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";
import BackButton from "../components/BackButton";
import FoodCounter from "../components/FoodCounter";
import FoodCartCounter from "../components/FoodCartCounter";

const { width, height } = Dimensions.get("screen");

const cake_IMAGE = Image.resolveAssetSource(cake).uri;
const tart_IMAGE = Image.resolveAssetSource(tart).uri;
const icecream_IMAGE = Image.resolveAssetSource(icecream).uri;
const salmon_IMAGE = Image.resolveAssetSource(salmon).uri;

// const data = [cake_IMAGE, tart_IMAGE, icecream_IMAGE, salmon_IMAGE];
const data = [
  {
    image: cake_IMAGE,
    title: "Cocoa Fudge Cake",
    description: "A creamy, nutty delicacy made from rich milk-chocolate.",
    price: 13.0,
  },
  {
    image: tart_IMAGE,
    title: "Forest Berry Tart",
    description:
      "A nature-filled tart that will remind you of berry-filled forests when enjoying this delicacy.",
    price: 22.0,
  },
  {
    image: icecream_IMAGE,
    title: "CocoFrio",
    description:
      "Rich, coconut ice-cream that is perfect for quenching your sweet tooth.",
    price: 7.5,
  },
  {
    image: salmon_IMAGE,
    title: "Poached Salmon",
    description: "Beautifully poached salmon from the seas of Bermuda.",
    price: 24.5,
  },
];

const imageW = width * 1;
const imageH = height * 0.6;
const ItemCarousel: React.FC = () => {
  let [fontsLoaded] = useFonts([
    Poppins_600SemiBold,
    Poppins_300Light,
    Poppins_400Regular,
  ]);

  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <BackButton />
      <View style={StyleSheet.absoluteFillObject}>
        {data.map((item, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.Image
              key={`image-${index}`}
              source={{ uri: item.image }}
              style={[
                StyleSheet.absoluteFillObject,
                { opacity },
                { tintColor: "white" },
              ]}
              blurRadius={50}
            />
          );
        })}
      </View>
      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { x: scrollX },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        horizontal
        pagingEnabled
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width,
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  width: imageW,
                  height: imageH,
                  resizeMode: "cover",

                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                  shadowOpacity: 1,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowRadius: 20,
                }}
              />
              <View style={{ marginTop: 30, height: 150, width: 400 }}>
                <Text
                  style={{
                    textAlign: "center",
                    color: "black",
                    fontSize: 36,
                    fontWeight: "bold",
                    fontFamily: "Poppins_600SemiBold",
                    // shadowColor: "#171717",
                    // shadowOffset: { width: -2, height: 4 },
                    // shadowOpacity: 0.35,
                    // shadowRadius: 3,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: "gray",
                    fontFamily: "Poppins_300Light",
                    fontSize: 16,
                    padding: 10,
                    textAlign: "center",
                    shadowColor: "#171717",
                    // shadowOffset: { width: -2, height: 4 },
                    // shadowOpacity: 0.35,
                    // shadowRadius: 3,
                    fontWeight: "500",
                  }}
                >
                  {item.description}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginRight: 1,
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontFamily: "Poppins_300Light",
                      textAlign: "center",
                      fontSize: 22,
                      fontWeight: "bold",
                    }}
                  >
                    $
                  </Text>
                  <Text
                    style={{
                      color: "black",
                      fontFamily: "Poppins_300Light",
                      textAlign: "center",
                      fontWeight: "bold",

                      fontSize: 22,
                    }}
                  >
                    {Number(item.price)?.toFixed(2)}
                  </Text>
                </View>
                <FoodCartCounter />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ItemCarousel;

const styles = StyleSheet.create({});
