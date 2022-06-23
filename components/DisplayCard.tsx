import { StyleSheet, Text, View, ImageBackground } from "react-native";

interface IProps {
  imageURL: any;
  name: any;
  country: any;
  address: any;
}

const DisplayCard = (props: IProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: props.imageURL }}
        resizeMode="cover"
        style={styles.imageStyle}
        imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
      ></ImageBackground>
      <View style={{ marginTop: 20, marginLeft: 10 }}>
        <Text style={styles.textStyle}>{props.name}</Text>
      </View>
    </View>
  );
};

export default DisplayCard;

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: "90%",
    marginLeft: 20,
    marginRight: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  imageStyle: {
    height: 175,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
