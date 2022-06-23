import { StyleSheet, Text, View, Image } from "react-native";
import { Colours } from "../assets/utils/colours";
import ModalButton from "./ModalButton";

const Popup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>These items have been added to your</Text>
      <Text style={styles.potluckTextStyle}>Potluck!</Text>
      <View style={{ width: "100%", marginRight: 20 }}>
        <ModalButton />
      </View>
    </View>
  );
};

export default Popup;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
    flex: 1,
    height: "50%",
    position: "absolute",
    width: "75%",
    left: "12%",
    top: "25%",
    borderRadius: 10,
    elevation: 20,
    borderWidth: 0.5,
    borderColor: "#ededed",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "400",
    padding: 30,
    fontStyle: "italic",
    fontFamily: "Poppins_300Light",
  },
  potluckTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    color: Colours.primary,
    fontStyle: "italic",
    marginTop: -78,
    marginRight: -140,
    textDecorationLine: "underline",
    fontFamily: "Poppins_600SemiBold",
  },
});
