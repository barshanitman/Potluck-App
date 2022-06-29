import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  Dimensions,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import CartCountButton from "../components/MenuItemComponents/CartCountButton";
import { ListItem } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { Colours } from "../assets/utils/colours";
import FoodItemCard from "../components/FoodItemCard";
import { FoodItems } from "../FoodItems";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import ViewMenu from "../components/ViewMenu";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_300Light,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { BackgroundImage } from "react-native-elements/dist/config";

const data = {
  title: "Fernandough",
  description:
    "Hey guys, I'm Nilani Fernando and baking is my passion. I can't wait to share my custom cakes, dessert platters & other sweet things.",
  Sunday: "9am - 5pm",
  Monday: "9am - 5pm",
  Tuesday: "9am - 5pm",
  Wednesday: "9am - 5pm",
  Thursday: "9am - 5pm",
  Friday: "9am - 5pm",
  Saturday: "9am - 5pm",
};

const { width, height } = Dimensions.get("screen");

const SupplierInfoScreen = ({ route, navigation }) => {
  let [fontsLoaded] = useFonts([
    Poppins_600SemiBold,
    Poppins_300Light,
    Poppins_500Medium,
  ]);
  const { imageURL, name, isClosed, rating, review_count, address } =
    route.params;

  const foodItems = FoodItems;
  const navigationRoute = useNavigation();

  return (
    <View style={{ backgroundColor: "white", height: "100%", flex: 1 }}>
      <StatusBar barStyle={"light-content"} translucent={true} hidden={true} />
      <CartCountButton />

      <View style={{}}>
        <ImageBackground
          source={require("../assets/RoseCupCake.jpg")}
          style={{
            height: 250,
          }}
          resizeMode="cover"
        />
      </View>
      <ScrollView
        contentInset={{ bottom: 70 }}
        bounces
        style={{
          height: "60%",
          paddingTop: 0,
          paddingLeft: 5,
          paddingRight: 5,
          paddingBottom: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "75%" }}>
            <View style={{ alignItems: "baseline" }}>
              <View style={styles.title}>
                <Text
                  style={{ fontSize: 25, fontFamily: "Poppins_600SemiBold" }}
                >
                  Fernandough
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ marginBottom: 9 }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.secondaryText}>Baker</Text>
                    <Text style={{ marginLeft: 5 }}>🥖</Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                marginBottom: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Text style={styles.suburbTextStyle}>Schofields</Text>
              <View
                style={{
                  height: 4,
                  width: 4,
                  backgroundColor: "gray",
                  borderRadius: 100,
                  marginLeft: 6,
                  marginBottom: 3,
                }}
              ></View>

              <Text style={styles.distanceTextStyle}>2.3kms</Text>
              <View
                style={{
                  height: 4,
                  width: 4,
                  backgroundColor: "gray",
                  borderRadius: 100,
                  marginLeft: 6,
                  marginBottom: 3,
                }}
              ></View>

              <Text style={styles.openStatusStyle}>Closed</Text>
            </View>
          </View>
          <Image
            source={require("../assets/StockPhoto.jpg")}
            style={{
              borderColor: "white",
              marginTop: 25,
              marginRight: 20,
              height: 85,
              width: 85,
              borderRadius: 100,
            }}
          />
        </View>
        <View style={{ marginTop: 10, marginLeft: 15 }}>
          <Text style={{ fontSize: 18, fontFamily: "Poppins_600SemiBold" }}>
            About
          </Text>
          <ScrollView
            style={{
              width: "95%",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                fontSize: 13,
                fontWeight: "600",
                fontFamily: "Poppins_300Light",

                color: "#333333",
              }}
            >
              {data.description}
            </Text>
          </ScrollView>
          <View style={{ marginTop: 20 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Image
                source={require("../assets/Amenities/dessert.png")}
                style={{ height: 20, width: 20 }}
              />
              <Text
                style={{
                  marginLeft: 5,
                  fontFamily: "Poppins_300Light",
                  color: "#333333",
                  fontSize: 13,
                }}
              >
                Desserts
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Image
                source={require("../assets/Amenities/CustomOrders.png")}
                style={{ height: 20, width: 20 }}
              />
              <Text
                style={{
                  marginLeft: 5,
                  fontFamily: "Poppins_300Light",
                  color: "#333333",
                  fontSize: 13,
                }}
              >
                Custom Orders
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Image
                source={require("../assets/Amenities/Vegetarian.png")}
                style={{ height: 20, width: 20 }}
              />
              <Text
                style={{
                  marginLeft: 5,
                  fontFamily: "Poppins_300Light",
                  color: "#333333",
                  fontSize: 13,
                }}
              >
                Vegetarian
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Poppins_600SemiBold",
              }}
            >
              Hours
            </Text>
            <View style={{ marginTop: 5 }}>
              <View
                style={{
                  flexDirection: "row",
                  width: "50%",
                  justifyContent: "space-between",
                  marginBottom: 3,
                }}
              >
                <Text
                  style={{ fontFamily: "Poppins_400Regular", fontSize: 13 }}
                >
                  Sunday
                </Text>
                <Text
                  style={{ fontFamily: "Poppins_400Regular", fontSize: 13 }}
                >
                  {data.Sunday}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "50%",
                  justifyContent: "space-between",
                  marginBottom: 3,
                }}
              >
                <Text
                  style={{ fontFamily: "Poppins_400Regular", fontSize: 13 }}
                >
                  Monday
                </Text>
                <Text
                  style={{ fontFamily: "Poppins_400Regular", fontSize: 13 }}
                >
                  {data.Monday}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  width: "50%",
                  justifyContent: "space-between",
                  marginBottom: 3,
                }}
              >
                <Text
                  style={{ fontFamily: "Poppins_400Regular", fontSize: 13 }}
                >
                  Tuesday
                </Text>
                <Text
                  style={{ fontFamily: "Poppins_400Regular", fontSize: 13 }}
                >
                  {data.Tuesday}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  width: "50%",
                  justifyContent: "space-between",
                  marginBottom: 3,
                }}
              >
                <Text
                  style={{ fontFamily: "Poppins_400Regular", fontSize: 13 }}
                >
                  Wednesday
                </Text>
                <Text
                  style={{ fontFamily: "Poppins_400Regular", fontSize: 13 }}
                >
                  {data.Wednesday}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  width: "50%",
                  justifyContent: "space-between",
                  marginBottom: 3,
                }}
              >
                <Text
                  style={{ fontFamily: "Poppins_400Regular", fontSize: 13 }}
                >
                  Thursday
                </Text>
                <Text
                  style={{ fontFamily: "Poppins_400Regular", fontSize: 13 }}
                >
                  {data.Thursday}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  width: "50%",
                  justifyContent: "space-between",
                  marginBottom: 3,
                }}
              >
                <Text
                  style={{ fontFamily: "Poppins_400Regular", fontSize: 13 }}
                >
                  Friday
                </Text>
                <Text
                  style={{ fontFamily: "Poppins_400Regular", fontSize: 13 }}
                >
                  {data.Friday}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "50%",
                  justifyContent: "space-between",
                  marginBottom: 3,
                }}
              >
                <Text
                  style={{ fontFamily: "Poppins_400Regular", fontSize: 13 }}
                >
                  Saturday
                </Text>
                <Text
                  style={{ fontFamily: "Poppins_400Regular", fontSize: 13 }}
                >
                  {data.Saturday}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <ViewMenu screenWidth={width} screenHeight={height} />
      <BackButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
  title: {
    marginTop: 20,
    marginLeft: 13,
  },
  secondaryText: {
    fontSize: 15,
    color: "grey",
    fontWeight: "400",
    marginLeft: 15,
    marginTop: 5,
    // marginRight: 10,
    fontFamily: "Poppins_600SemiBold",
  },
  MenuItemContainer: {
    marginLeft: 15,
    marginTop: 5,
    marginRight: 10,
    marginBottom: 5,
  },
  MenuItemHeading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  BorderContainer: {
    borderBottomColor: "#ededed",
    borderBottomWidth: 1,
    width: "100%",
  },

  FoodItemContainer: {
    marginTop: 10,
    marginLeft: 15,
  },
  suburbTextStyle: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 15,
    marginBottom: 5,
    fontFamily: "Poppins_300Light",

    color: "#333333",
  },
  distanceTextStyle: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 5,
    marginBottom: 5,
    fontFamily: "Poppins_300Light",

    color: "#333333",
  },
  openStatusStyle: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 5,
    marginBottom: 5,
    fontFamily: "Poppins_500Medium",
    color: Colours.secondary,
  },
});

export default SupplierInfoScreen;
