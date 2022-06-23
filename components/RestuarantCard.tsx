import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { Colours } from "../assets/utils/colours";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";

const RestuarantCard = (props: any) => {
  let [fontsLoaded] = useFonts([Poppins_600SemiBold, Poppins_300Light]);
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
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Card.Title
                title={`${props.name}`}
                titleStyle={{
                  fontSize: 18,
                  fontWeight: "bold",
                  fontFamily: "Poppins_600SemiBold",
                }}
              />

              <View style={{ marginBottom: 10 }}>
                {props.address
                  ? props.address.map((item: any) => (
                      <Text style={styles.secondaryText}>{item}</Text>
                    ))
                  : null}
              </View>
            </View>
            <View style={{ marginRight: 25, marginTop: 25 }}>
              <Avatar.Image
                size={60}
                source={require("../assets/StockPhoto.jpg")}
                style={{
                  shadowOffset: { width: 0, height: 0 },
                  shadowRadius: 5,
                  shadowColor: Colours.primary,
                  shadowOpacity: 1,
                }}
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
    color: "green",
  },
  secondaryText: {
    fontSize: 12,
    color: "grey",
    fontWeight: "600",
    marginLeft: 15,
    marginBottom: 5,
    fontFamily: "Poppins_300Light",
  },
});
export default RestuarantCard;
