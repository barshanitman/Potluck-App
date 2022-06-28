import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colours } from "../assets/utils/colours";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
const BackRightButton = () => {
  const navigationRoute = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigationRoute.goBack();
        }}
        style={{
          backgroundColor: "white",
          height: 40,
          width: 40,
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ marginLeft: 2 }}>
          <Entypo name="chevron-small-right" size={38} color={"black"} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BackRightButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "30%",
    right: 25,
    zIndex: 200,
    flexDirection: "row",
  },
});
