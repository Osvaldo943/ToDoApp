import React from "react";
import { ThemeProvider } from "styled-components/native"; // Import corrigido
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import theme from "./src/theme";

import Groups from "./src/screens/tasks";
import Loading from "./src/screens/loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Loading /> : <Loading />}
    </ThemeProvider>
  );
}
