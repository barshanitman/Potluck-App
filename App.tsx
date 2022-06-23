import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { SelectedRestuarantContext } from "./contexts/SelectedRestuarantContext";
import * as Location from "expo-location";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [location, setLocation] = useState("Waiting...");
  const [city, setCity] = useState("Tokyo");
  const [displayCity, setDisplayCity] = useState("Waiting...");
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState(0);
  const [longtitude, setLongtitude] = useState(0);
  const locationHandler = (enteredLocation) => {
    setLocation(enteredLocation);
  };
  const data = {
    city: city,
    displayCity: displayCity,
    lat: latitude,
    long: longtitude,
  };

  useEffect(() => {
    (async () => {
      // await SplashScreen.preventAutoHideAsync();

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      const place = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      let city;
      place.find((p) => {
        city = p.city;
        setCity(p.city);
        setDisplayCity(p.city);
      });

      if (location) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await SplashScreen.hideAsync();
        setLatitude(location.coords.latitude);
        setLongtitude(location.coords.longitude);
      }
    })();
  }, [city]);

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <SelectedRestuarantContext.Provider value={data}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SelectedRestuarantContext.Provider>
  );
}
