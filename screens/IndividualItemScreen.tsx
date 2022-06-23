import { StyleSheet, Text, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import FoodItemCard from "../components/FoodItemCard";
import FoodItemHeader from "../components/FoodItemHeader";
import FoodCounter from "../components/FoodCounter";
import CartButton from "../components/CartButton";
import BackButton from "../components/BackButton";
import { useState } from "react";
import Popup from "../components/Popup";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";

const IndividualItemScreen = ({ route, navigation }) => {
  let [fontsLoaded] = useFonts([Poppins_600SemiBold, Poppins_300Light]);
  const [quantity, setQuantity] = useState(0);
  const { imageURL, name, price, oldPrice, description } = route.params;
  const [activatePopup, setActivatePopup] = useState(false);

  const quantityHandler = (enteredQuantity) => {
    setQuantity(enteredQuantity);
  };

  const totalPrice = (quantity, price) => {
    return quantity * price;
  };

  return (
    <View style={styles.container}>
      <View>
        <Card style={{ elevation: 0 }}>
          <View>
            <Card.Cover source={{ uri: `${imageURL}` }} />
          </View>
          <FoodItemHeader
            Name={name}
            Description={description}
            Price={price}
            OldPrice={oldPrice}
          />

          <FoodCounter Quantity={quantityHandler} />
        </Card>
      </View>
      <View>
        <CartButton
          TotalPrice={totalPrice(quantity, price)}
          pressHandler={() => setActivatePopup(true)}
        />
      </View>
      <Modal
        visible={activatePopup}
        animationType={"slide"}
        presentationStyle={"overFullScreen"}
        transparent={true}
      >
        <Popup />
      </Modal>
      <BackButton />
    </View>
  );
};

export default IndividualItemScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    justifyContent: "space-between",
  },
  title: {
    marginTop: 30,
  },
  secondaryText: {
    fontSize: 13,
    color: "grey",
    fontWeight: "400",
    marginLeft: 15,
    marginTop: 5,
    marginRight: 10,
    fontFamily: "Poppins_300Light",
  },
  MenuItemContainer: {
    marginLeft: 15,
    marginTop: 5,
    marginRight: 10,
    marginBottom: 5,
  },
  MenuItemHeading: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Poppins_600SemiBold",
  },
  BorderContainer: {
    borderBottomColor: "#ededed",
    borderBottomWidth: 1,
    width: "100%",
  },

  FoodItemContainer: {
    marginTop: 10,
    marginLeft: 15,
  },
});
