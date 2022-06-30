import { StyleSheet, Text, View } from "react-native";
import { Colours } from "../../assets/utils/colours";

interface Props {
  quantity: number;
  name: string;
  price: number;
}

const CartItemRow = (props: Props) => {
  const { quantity, name, price } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "flex-start",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              backgroundColor: Colours.primary,
              height: 30,
              width: 30,
              borderRadius: 100,
              marginTop: "5%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "Poppins_400Regular",
                fontSize: 18,
              }}
            >
              {quantity}
            </Text>
          </View>
          <View style={{ marginTop: "5%", marginLeft: "4%" }}>
            <Text style={{ fontSize: 22, fontFamily: "Poppins_300Light" }}>
              {name}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: "3.5%" }}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: "Poppins_300Light",
            }}
          >
            $
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontFamily: "Poppins_300Light",
            }}
          >
            {price?.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartItemRow;

const styles = StyleSheet.create({});
