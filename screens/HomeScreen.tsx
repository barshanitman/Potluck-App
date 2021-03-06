import { View, Text, SafeAreaView, StyleSheet, Touchable } from "react-native";
import {
  StatusBar,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useEffect, useState, useContext } from "react";
import CartCountButton from "../components/MenuItemComponents/CartCountButton";
import { Colors, Searchbar } from "react-native-paper";
import { Colours } from "../assets/utils/colours";
import RestuarantCard from "../components/RestuarantCard";
import { Entypo } from "@expo/vector-icons";
import { SelectedRestuarantContext } from "../contexts/SelectedRestuarantContext";
import { useNavigation } from "@react-navigation/native";
import DisplayCard from "../components/DisplayCard";
import { Avatar } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "@expo-google-fonts/poppins";
import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import HomeCartButton from "../components/MenuItemComponents/HomeCartCountButton";
import HomeCartCountButton from "../components/MenuItemComponents/HomeCartCountButton";
import ItemCarousel from "./ItemCarousel";
const StatusBarHeight = StatusBar.currentHeight;
const YELP_API_KEY =
  "bfHbKFoIbgDzEafZ6u-Rcp-fZoWMrVrYSKWrjH3usKKBjrEjLh5csdgF5XeyzT2_6s37lZdzUxTO5qbSlkClNsisbBiWyw1tMohVTN3omxfpyCn6qvKHs6RCKIp0YnYx";

const HomeScreen = () => {
  const navigationRoute = useNavigation();
  const [restuarantData, setRestuarantData] = useState<any>({ businesses: [] });
  const globalCity = useContext(SelectedRestuarantContext);
  const [initialLocation, setInitialLocation] = useState("Sydney");
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });
  const getRestuarantData = () => {
    const url = `https://potluck-api.azurewebsites.net/suppliers/supplier`;

    const apiOptions = {
      headers: {},
    };

    return fetch(url, apiOptions)
      .then((res) => res.json())
      .then((data) => setRestuarantData(data));
  };

  useEffect(() => {
    getRestuarantData();
  }, []);

  let text = "Waiting..";
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"dark-content"} translucent={true} />

        <View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              padding: 5,
            }}
          >
            <View
              style={{
                width: "14.5%",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                marginLeft: 2,
                height: "95%",
              }}
            >
              {/* <Image
                source={require("../assets/ProfilePicture2.jpg")}
                style={{
                  height: 48,
                  width: 48,
                  borderRadius: 100,
                }}
              /> */}

              <Entypo name="menu" size={32} color="black" />
            </View>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "flex-end",
                marginRight: 16,
                width: "60%",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigationRoute.navigate("Maps");
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 5,
                    marginRight: "25%",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      width: "100%",
                      justifyContent: "flex-end",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        width: "55%",
                      }}
                    >
                      <Entypo
                        name="location-pin"
                        size={24}
                        color={Colours.primary}
                        style={{ paddingTop: 5 }}
                      />
                      <View style={{}}>
                        <Text style={styles.locationText}>
                          {globalCity.displayCity}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "15%",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                height: "115%",
              }}
            >
              <View style={{ marginTop: 5 }}>
                <HomeCartCountButton />
              </View>
            </View>
          </View>
          <View style={styles.searchbarContainer}>
            <Searchbar
              placeholder="What are you feeling like today?"
              style={styles.searchbar}
              inputStyle={{
                fontSize: 14,
                textAlign: "left",
                fontFamily: "Poppins_400Regular",
                justifyContent: "center",
              }}
              iconColor={Colours.primary}
              value={""}
            />
          </View>
          <ScrollView contentInset={{ bottom: 150 }}>
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  marginLeft: 25,
                  marginTop: 15,
                  fontFamily: "Poppins_600SemiBold",
                }}
              >
                Home chefs near you
              </Text>
            </View>
            {restuarantData.length > 0 && restuarantData
              ? restuarantData.map((item) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigationRoute.navigate("SupplierInfoScreen", {
                        // imageURL: item.image_url,
                        // name: item.name,
                        // isClosed: item.is_closed,
                        // rating: item.rating,
                        // review_count: item.review_count,
                        // address: item.location.display_address,
                      })
                    }
                    activeOpacity={1}
                  >
                    <RestuarantCard
                      name={item.Supplier.kitchenname}
                      imageURL={item.Supplier.coverphoto}
                      categoryEmoji={item.FoodCategory.emoji}
                      categoryName={item.FoodCategory.description}
                      suburb={item.Supplier.suburb}
                      profilephoto={item.Supplier.profilephoto}
                    />
                  </TouchableOpacity>
                ))
              : null}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  searchbarContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "",
  },
  searchbar: {
    borderRadius: 20,
    elevation: 0,
    // borderBottomColor: "#d8d8d8",
    // borderBottomWidth: 0.75,
    backgroundColor: "#f1f2f2",
    opacity: 0.8,
  },
  locationText: {
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 10,
    fontFamily: "Poppins_600SemiBold",
  },
  locationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
