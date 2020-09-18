import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import TabScreen from "./Components/TabScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import Login from './pages/Login';
import Routes from './Routes';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
      });
    };
    loadFont().then(() => {
      setIsLoading(false);
    });
  }, []);
  
  if (!isLoading) {
    return (
      <Provider store={store}>
          <Routes />
      </Provider>
    );
  } else {
    return <Text>dsa</Text>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});