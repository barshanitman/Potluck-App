import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colours } from "../assets/utils/colours";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
const BackLeftButton = () => {
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
        <View style={{ marginRight: 3 }}>
          <Entypo name="chevron-small-left" size={38} color={"black"} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BackLeftButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "30%",
    left: 25,
    zIndex: 200,
    flexDirection: "row",
  },
});
