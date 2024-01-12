import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import { ThemeProvider } from "styled-components/native"; // Import corrigido

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import theme from "./src/theme";

import Loading from "./src/screens/loading";
import Tasks from "./src/screens/tasks";

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
      {fontsLoaded ? <Tasks /> : <Loading />}
    </ThemeProvider>
  );
}
