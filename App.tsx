import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";

import { ThemeProvider } from "styled-components/native"; // Import corrigido
import theme from "./src/theme";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Routes } from "./src/routes";
import Loading from "./src/screens/loadingScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={{ backgroundColor: "#121214", flex: 1 }}>
        {fontsLoaded ? <Routes /> : <Loading />}
      </View>
    </ThemeProvider>
  );
}
