import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colours } from "../assets/utils/colours";
import { useNavigation } from "@react-navigation/native";
const BackButton = () => {
  const navigationRoute = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigationRoute.goBack();
        }}
      >
        <Ionicons name="chevron-back" size={42} color={"black"} />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 30,
    left: 5,
  },
});
