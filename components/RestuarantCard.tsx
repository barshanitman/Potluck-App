import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { Colours } from "../assets/utils/colours";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_300Light,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import CountryFlag from "react-native-country-flag";

const RestuarantCard = (props: any) => {
  let [fontsLoaded] = useFonts([
    Poppins_600SemiBold,
    Poppins_300Light,
    Poppins_500Medium,
  ]);
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  } else {
    return (
      <Card style={styles.container}>
        <View>
          <View>
            <Card.Cover
              source={{ uri: `${props.imageURL}` }}
              style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{}}>
              <Text style={styles.titleStyle}>{props.name}</Text>

              <View
                style={{
                  marginBottom: 5,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.secondaryText}>Singaporean</Text>
              </View>
              <View
                style={{
                  marginBottom: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.suburbTextStyle}>Schofields</Text>
                <View
                  style={{
                    height: 4,
                    width: 4,
                    backgroundColor: "gray",
                    borderRadius: 100,
                    marginLeft: 5,
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
                    marginLeft: 5,
                    marginBottom: 3,
                  }}
                ></View>

                <Text style={styles.openStatusStyle}>Closed</Text>
              </View>
            </View>
            <View
              style={{
                marginRight: 15,
                marginTop: 15,
                height: 75,
                width: 75,
              }}
            >
              <Avatar.Image
                size={75}
                source={require("../assets/StockPhoto.jpg")}
                style={{}}
              />
            </View>
          </View>
        </View>
      </Card>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    margin: 20,
    borderRadius: 10,
  },
  titleStyle: {
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
    marginLeft: 15,
    width: 250,
    marginTop: 10,
    marginBottom: 3,
  },
  secondaryText: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 15,
    fontFamily: "Poppins_500Medium",
    marginRight: 5,
    color: "#333333",
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
export default RestuarantCard;
