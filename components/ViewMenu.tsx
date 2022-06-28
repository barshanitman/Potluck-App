import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ViewMenu = (props) => {
  const { screenWidth, screenHeight } = props;

  const navigationRoute = useNavigation();
  return (
    <View style={{ zIndex: 1 }}>
      <TouchableOpacity
        style={{
          position: "absolute",
          // left: screenWidth / 4,
          backgroundColor: "black",
          width: "95%",
          justifyContent: "center",
          alignItems: "center",
          height: 42,
          marginLeft: "2.5%",
          bottom: 20,
        }}
        activeOpacity={1}
        onPress={() => {
          navigationRoute.navigate("ItemCarousel");
        }}
      >
        <Text style={{ color: "white", fontFamily: "Poppins_600SemiBold" }}>
          View Menu
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewMenu;

const styles = StyleSheet.create({});
