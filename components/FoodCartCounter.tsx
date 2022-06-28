import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colours } from "../assets/utils/colours";
import { orderStore } from "../stores/OrderStore";

const FoodCartCounter = () => {
  const [counter, setCounter] = useState(0);
  const increaseCartQuantity = orderStore(
    (state) => state.increaseCartQuantity
  );
  const decreaseCartQuantity = orderStore(
    (state) => state.decreaseCartQuantity
  );

  const IncreaseHandler = () => {
    setCounter(counter + 1);
    increaseCartQuantity();
  };

  const DecreaseHandler = () => {
    setCounter(counter - 1);
    decreaseCartQuantity();
  };

  const validCounterValue = (val) => {
    return Math.max(val, 0);
  };

  return (
    <View>
      <View style={{}}>
        <View style={styles.container}>
          <TouchableOpacity onPress={DecreaseHandler}>
            <Ionicons
              name="remove-circle-sharp"
              size={52}
              color={Colours.primary}
            />
          </TouchableOpacity>
          <View style={{ marginLeft: 30, marginRight: 30, marginTop: 10 }}>
            <Text style={styles.counterText}>{validCounterValue(counter)}</Text>
          </View>
          <TouchableOpacity onPress={IncreaseHandler}>
            <Ionicons
              name="add-circle-sharp"
              size={52}
              color={Colours.primary}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.BorderContainer}></View>
    </View>
  );
};

export default FoodCartCounter;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    // justifyContent: "space-evenly",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  counterText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "400",
    fontFamily: "Poppins_600SemiBold",
  },
  BorderContainer: {
    marginTop: 45,
    borderBottomColor: "#ededed",
    borderBottomWidth: 1,
    width: "100%",
  },
});
