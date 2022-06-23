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
} from "react-native";
import { useEffect, useState, useContext } from "react";
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
const StatusBarHeight = StatusBar.currentHeight;
const YELP_API_KEY =
  "bfHbKFoIbgDzEafZ6u-Rcp-fZoWMrVrYSKWrjH3usKKBjrEjLh5csdgF5XeyzT2_6s37lZdzUxTO5qbSlkClNsisbBiWyw1tMohVTN3omxfpyCn6qvKHs6RCKIp0YnYx";

const HomeScreen = () => {
  const navigationRoute = useNavigation();
  const [restuarantData, setRestuarantData] = useState({ businesses: [] });
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

  const getRestuarantfromYelp = () => {
    const url = `https://api.yelp.com/v3/businesses/search?term=restuarants&location=${globalCity.city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(url, apiOptions)
      .then((res) => res.json())
      .then((data) => setRestuarantData(data));
  };

  useEffect(() => {
    getRestuarantfromYelp();
  }, [globalCity]);

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
        <View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
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
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Entypo
                    name="location-pin"
                    size={24}
                    color={"black"}
                    style={{ paddingTop: 5 }}
                  />
                  <Text style={styles.locationText}>
                    {globalCity.displayCity}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.searchbarContainer}>
            <Searchbar
              placeholder="What are you feeling like today?"
              style={styles.searchbar}
              inputStyle={{
                fontSize: 15,
                textAlign: "left",
                fontFamily: "Poppins_400Regular",
              }}
              iconColor={"black"}
              value={""}
            />
          </View>
          <ScrollView>
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  marginLeft: 25,
                  marginTop: 10,
                  fontFamily: "Poppins_600SemiBold",
                }}
              >
                Home chefs near you
              </Text>
            </View>

            {restuarantData.businesses.length > 0 && restuarantData.businesses
              ? restuarantData.businesses.map((item) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigationRoute.navigate("Retailer", {
                        imageURL: item.image_url,
                        name: item.name,
                        isClosed: item.is_closed,
                        rating: item.rating,
                        review_count: item.review_count,
                        address: item.location.display_address,
                      })
                    }
                    activeOpacity={1}
                  >
                    <RestuarantCard
                      name={item.name}
                      imageURL={item.image_url}
                      country={item.location.country}
                      address={item.location.display_address}
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
    margin: 20,
    borderRadius: 5,
  },
  searchbar: {
    borderRadius: 10,
    elevation: 5,
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
