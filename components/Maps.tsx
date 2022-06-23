import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SelectedRestuarantContext } from "../contexts/SelectedRestuarantContext";
import { useContext } from "react";

const Maps = () => {
  const locationData = useContext(SelectedRestuarantContext);
  return (
    <>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: locationData.lat,
          longitude: locationData.long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: locationData.lat,
            longitude: locationData.long,
          }}
          title={locationData.displayCity}
        />
      </MapView>
    </>
  );
};

export default Maps;

const styles = StyleSheet.create({
  container: {
    height: 400,
  },
});
