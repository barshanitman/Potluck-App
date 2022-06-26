import * as React from "react";
import {
  StatusBar,
  Animated,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  _View,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native";
import feeding from "../assets/LoginScreenImages/feeding.png";
import feed from "../assets/LoginScreenImages/cooking.png";
import delivery from "../assets/LoginScreenImages/delivery-man.png";
import fingerprint from "../assets/LoginScreenImages/fingerprint.png";
import PotLuckLogo from "../assets/PotluckLogo.png";
import { Colours } from "../assets/utils/colours";

import {
  NavigationRouteContext,
  useNavigation,
} from "@react-navigation/native";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";
const { width, height } = Dimensions.get("screen");

// https://www.flaticon.com/packs/retro-wave
// inspiration: https://dribbble.com/shots/11164698-Onboarding-screens-animation
// https://twitter.com/mironcatalin/status/1321180191935373312

const feed_IMAGE = Image.resolveAssetSource(feed).uri;
const feeding_IMAGE = Image.resolveAssetSource(feeding).uri;
const fingerprint_IMAGE = Image.resolveAssetSource(fingerprint).uri;
const delivery_IMAGE = Image.resolveAssetSource(delivery).uri;
const PotLuckLogo_IMAGE = Image.resolveAssetSource(PotLuckLogo).uri;

const bgs = [
  Colours.primary,
  Colours.primary,
  Colours.primary,
  Colours.primary,
];

const DATA = [
  {
    key: "3571572",
    title: `Welcome to our new community 😍`,
    description:
      "We are excited to share our authentic assortment of delicious cuisines with you.",
    image: PotLuckLogo_IMAGE,
    width: 600,
    height: 600,
  },
  {
    key: "3571747",
    title: "Empowering home chefs and virtual restuarants",
    description:
      "All of the dishes on Potluck are brought to you by our amazing chefs working from home.",
    image: feed_IMAGE,
    width: width * 0.45,
    height: height * 0.45,
  },
  {
    key: "3571680",
    title: "Unique dishes you will not find elsewhere",
    description:
      "There's simply nothing like fresh, home-made food, am I right?",
    image: fingerprint_IMAGE,
    width: width * 0.45,
    height: height * 0.45,
  },
  {
    key: "3571603",
    title: "Pick-up or Delivery",
    description:
      "We understand that schedules can be tricky, so we give you the choice of how you want to receive your food.",
    image: delivery_IMAGE,
    width: width * 0.45,
    height: height * 0.45,
  },
];

const Indicator = ({ scrollX }) => {
  return (
    <View style={{ position: "absolute", bottom: 25, flexDirection: "row" }}>
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={`indicator=${i}`}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: "white",
              margin: 5,
              transform: [
                {
                  scale,
                },
              ],
            }}
          />
        );
      })}
    </View>
  );
};

const BackDrop = ({ scrollX }) => {
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor: bgs[0],
        },
      ]}
    />
  );
};

const Square = ({ scrollX }) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1
  );

  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["35deg", "0deg", "35deg"],
  });

  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, height],
  });

  return (
    <Animated.View
      style={{
        width: width * 2,
        height: height,
        backgroundColor: "white",
        borderRadius: 100,
        position: "absolute",
        top: -height * 0.6,
        left: -height * 0.3,
        transform: [
          {
            rotate: rotate,
          },
        ],
      }}
    />
  );
};

const Buttons = () => {
  const navigationRoute = useNavigation();
  return (
    <View
      style={{
        position: "absolute",
        bottom: 75,
        flexDirection: "row",
        justifyContent: "center",
        zIndex: 100,
      }}
    >
      <TouchableOpacity
        style={{
          width: "95%",
          height: 50,
          justifyContent: "center",
          backgroundColor: "yellow",
          borderRadius: 10,
        }}
        activeOpacity={0.5}
        onPress={() => {
          navigationRoute.navigate("Home");
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "Poppins_600SemiBold",
          }}
        >
          Explore cuisines
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const LoginScreen = () => {
  let [fontsLoaded] = useFonts([
    Poppins_600SemiBold,
    Poppins_300Light,
    Poppins_400Regular,
  ]);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        {/* <StatusBar hidden /> */}

        <StatusBar barStyle={"dark-content"} translucent={true} />
        <BackDrop scrollX={scrollX} />
        <Square scrollX={scrollX} />
        <Buttons />

        <Animated.FlatList
          data={DATA}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          scrollEventThrottle={32}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { x: scrollX } },
              },
            ],
            { useNativeDriver: false }
          )}
          contentContainerStyle={{ paddingBottom: 100 }}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            return (
              <View style={{ width, alignItems: "center", padding: 20 }}>
                <View
                  style={{
                    flex: 0.7,
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: item.width,
                      height: item.height,
                      resizeMode: "contain",
                    }}
                  />
                </View>
                <View style={{ flex: 0.3 }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 30,
                      marginBottom: 12,
                      color: "white",
                      fontFamily: "Poppins_600SemiBold",
                      marginTop: 10,
                      textAlign: "left",
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 16,
                      fontFamily: "Poppins_400Regular",
                    }}
                  >
                    {item.description}
                  </Text>
                </View>
              </View>
            );
          }}
        />
        <Indicator scrollX={scrollX} />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginScreen;
