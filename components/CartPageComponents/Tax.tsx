import { StyleSheet, Text, View } from "react-native";

interface Props {
  tax: number;
}

const Tax = (props: Props) => {
  const { tax } = props;
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
        {`Tax (GST)`}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 18, fontFamily: "Poppins_300Light" }}>$</Text>
        <Text style={{ fontSize: 18, fontFamily: "Poppins_300Light" }}>
          {tax?.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default Tax;

const styles = StyleSheet.create({});
