import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";

const FoodItemHeader = (props) => {
  let [fontsLoaded] = useFonts([Poppins_600SemiBold, Poppins_300Light]);
  const { Name, Description, Price, OldPrice } = props;
  return (
    <View style={styles.topContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>{Name}</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{Description}</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              marginRight: 10,
              marginLeft: 3,
            }}
          >
            <View>
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 20,
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
                  fontSize: 20,
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
                  fontSize: 20,
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
                  fontSize: 20,
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
      <View style={styles.counterContainer}></View>
    </View>
  );
};

export default FoodItemHeader;

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "white",
    width: "100%",
  },
  container: {
    marginTop: 25,
    marginLeft: 15,
    marginBottom: 5,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Poppins_600SemiBold",
  },
  descriptionText: {
    fontSize: 13,
    color: "grey",
    fontWeight: "400",
    flexWrap: "wrap",
    marginLeft: 2,
    fontFamily: "Poppins_300Light",
  },
  descriptionContainer: {
    marginTop: 10,
  },
  counterContainer: {
    marginTop: 20,
    borderBottomColor: "#ededed",
    borderBottomWidth: 1,
    width: "100%",
  },
});
