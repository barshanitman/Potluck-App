import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import Maps from "../components/Maps";
import { useNavigation } from "@react-navigation/native";

import { Searchbar } from "react-native-paper";
import { TouchableOpacity } from "react-native";
const MapScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: "100%",
        position: "absolute",
        width: "100%",
        zIndex: 0,
      }}
    >
      <Maps />
      <View
        style={{
          zIndex: 1,
          position: "relative",
          bottom: 700,
          marginBottom: -100,
        }}
      >
        <Searchbar
          placeholder="Choose your location"
          style={styles.searchbar}
          inputStyle={{ fontSize: 15, textAlign: "center" }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          backgroundColor: "black",
          position: "relative",
          width: "80%",
          height: "7%",
          bottom: 100,
          marginBottom: -50,
          left: 40,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          Go Back
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchbar: {
    borderRadius: 15,
    elevation: 10,
    margin: 10,
  },
});
export default MapScreen;
