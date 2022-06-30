import { StyleSheet, Text, View } from "react-native";

interface Props {
  subTotal: number;
}

const SubTotal = (props: Props) => {
  const { subTotal } = props;
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
          color: "gray",
          fontFamily: "Poppins_400Regular",
          fontSize: 18,
        }}
      >
        Subtotal
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 18, fontFamily: "Poppins_300Light" }}>$</Text>
        <Text style={{ fontSize: 18, fontFamily: "Poppins_300Light" }}>
          {subTotal?.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default SubTotal;

const styles = StyleSheet.create({});
