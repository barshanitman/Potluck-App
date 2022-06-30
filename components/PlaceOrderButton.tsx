import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PlaceOrderButton = () => {
  const navigationRoute = useNavigation();
  return (
    <View style={{ zIndex: 1 }}>
      <TouchableOpacity
        style={{
          // left: screenWidth / 4,
          backgroundColor: "black",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
        activeOpacity={1}
        onPress={() => {
          navigationRoute.navigate("ItemCarousel");
        }}
      >
        <Text style={{ color: "white", fontFamily: "Poppins_600SemiBold" }}>
          Place Order
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlaceOrderButton;

const styles = StyleSheet.create({});
