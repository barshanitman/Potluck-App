import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ModalButton = () => {
  const navigationRoute = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        navigationRoute.goBack();
      }}
    >
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
        <Text style={styles.TextStyle}>Go back</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ModalButton;

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
