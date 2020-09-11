import React, {useEffect,useState} from 'react';
import TabScreen from './Components/TabScreen';
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import {Text} from "react-native"

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
      });
    };
    loadFont().then(() => {
      setLoading(false)
    })
  }, []);
if (!loading) {
  return (
    <TabScreen />
  );
}else {
  return <Text>에러</Text>
  
}
    
  }