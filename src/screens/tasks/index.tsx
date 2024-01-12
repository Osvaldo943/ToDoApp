import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { Text } from "./styles";

export default function Groups() {
  return (
    <View style={styles.container}>
      <Text>Todos os groupos</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
