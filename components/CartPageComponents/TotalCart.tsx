import { StyleSheet, Text, View } from "react-native";

interface Props {
  totalPrice: number;
}

const TotalCart = (props: Props) => {
  const { totalPrice } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          fontFamily: "Poppins_500Medium",
          fontSize: 24,
        }}
      >
        {`Total`}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 22, fontFamily: "Poppins_500Medium" }}>$</Text>
        <Text style={{ fontSize: 22, fontFamily: "Poppins_500Medium" }}>
          {totalPrice?.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default TotalCart;

const styles = StyleSheet.create({});
