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
import AddTask from "./src/screens/addTask";
import TaskDetails from "./src/screens/tastDetails";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <View style={{ backgroundColor: "#121214", flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <TaskDetails /> : <Loading />}
      </ThemeProvider>
    </View>
  );
}
