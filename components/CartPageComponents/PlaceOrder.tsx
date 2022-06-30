import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colours } from "../../assets/utils/colours";
import PlaceOrderButton from "../PlaceOrderButton";

const PlaceOrder = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <AntDesign name="checkcircle" size={24} color={`${Colours.primary}`} />
        <View
          style={{
            marginLeft: "3%",
            width: "90%",
          }}
        >
          <Text style={{ fontFamily: "Poppins_300Light", fontSize: 12 }}>
            As per our T&Cs, orders are non-refundable and cannot be cancelled
            once placed
          </Text>
        </View>
      </View>
      <View style={{ width: "100%", marginTop: "5%" }}>
        <PlaceOrderButton />
      </View>
    </View>
  );
};

export default PlaceOrder;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: "5%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    left: "5%",
  },
});
