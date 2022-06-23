import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";

const FoodItemCard = (props) => {
  const navigation = useNavigation();
  const { Name, Description, Price, OldPrice } = props;

  let [fontsLoaded] = useFonts([Poppins_600SemiBold, Poppins_300Light]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{Name}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{Description}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", marginTop: 5, marginRight: 5 }}>
          <View>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 15,
                fontFamily: "Poppins_600SemiBold",
              }}
            >
              $
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 15,
                fontFamily: "Poppins_600SemiBold",
              }}
            >
              {Number(Price).toFixed(2)}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <View>
            <Text
              style={{
                fontWeight: "300",
                textDecorationLine: "line-through",
                textDecorationStyle: "solid",
                textDecorationColor: "black",
                fontFamily: "Poppins_300Light",
              }}
            >
              $
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "300",
                fontSize: 15,
                textDecorationLine: "line-through",
                textDecorationStyle: "solid",
                textDecorationColor: "grey",
                fontFamily: "Poppins_300Light",
              }}
            >
              {Number(OldPrice).toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodItemCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 5,
  },
  heading: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Poppins_600SemiBold",
  },
  descriptionText: {
    fontSize: 13,
    color: "grey",
    fontWeight: "400",
    flexWrap: "wrap",
    fontFamily: "Poppins_300Light",
  },
  descriptionContainer: {
    marginTop: 3,
  },
});
