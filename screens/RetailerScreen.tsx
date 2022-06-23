import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { ListItem } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { Colours } from "../assets/utils/colours";
import FoodItemCard from "../components/FoodItemCard";
import { FoodItems } from "../FoodItems";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";

const RetailerScreen = ({ route, navigation }) => {
  let [fontsLoaded] = useFonts([Poppins_600SemiBold, Poppins_300Light]);
  const { imageURL, name, isClosed, rating, review_count, address } =
    route.params;

  const foodItems = FoodItems;
  const navigationRoute = useNavigation();

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <Card style={{ elevation: 0 }}>
        <View>
          <Card.Cover source={{ uri: `${imageURL}` }} />
        </View>
        <View style={{ alignItems: "baseline" }}>
          <View style={styles.title}>
            <Text style={{ fontSize: 25, fontFamily: "Poppins_600SemiBold" }}>
              {name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <View style={{ marginBottom: 30 }}>
              {address.map((item) => (
                <View>
                  <Text style={styles.secondaryText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.BorderContainer}>
            <View style={styles.MenuItemContainer}>
              <Text style={styles.MenuItemHeading}>Unsold Items</Text>
            </View>
          </View>
          <ScrollView
            bounces={true}
            contentContainerStyle={{ flexGrow: 1 }}
            contentInset={{ bottom: 40, top: 0 }}
            showsVerticalScrollIndicator={false}
          >
            {foodItems.map((item) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                    navigationRoute.navigate("IndividualItem", {
                      imageURL: imageURL,
                      name: item.Name,
                      price: item.Price,
                      oldPrice: item.OldPrice,
                      description: item.description,
                    });
                  }}
                >
                  <FoodItemCard
                    Name={item.Name}
                    Description={item.description}
                    Price={item.Price}
                    OldPrice={item.OldPrice}
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </Card>
      <BackButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
  title: {
    marginTop: 30,
    marginLeft: 13,
  },
  secondaryText: {
    fontSize: 13,
    color: "grey",
    fontWeight: "400",
    marginLeft: 15,
    marginTop: 5,
    marginRight: 10,
    fontFamily: "Poppins_300Light",
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
});

export default RetailerScreen;
