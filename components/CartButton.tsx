import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { orderStore } from "../stores/OrderStore";

const CartButton = (props) => {
  const bears = orderStore((state) => state.bears);
  const { TotalPrice, pressHandler } = props;
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={pressHandler}>
      <View
        style={{
          backgroundColor: "black",
          padding: 5,
          height: 60,
          width: "80%",
          marginBottom: 10,
          marginLeft: 40,
          justifyContent: "center",
        }}
      >
        <Text style={styles.TextStyle}>Add to Cart</Text>
        <Text style={styles.TextStyle}>${TotalPrice.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  TextStyle: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    width: "100%",
    marginBottom: 2,
    fontFamily: "Poppins_600SemiBold",
  },
});
