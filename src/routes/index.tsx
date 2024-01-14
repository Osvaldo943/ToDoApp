import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

import AppRoutes from "./app.routes";

export function Routes() {
  return (
    <View style={{ backgroundColor: "red", flex: 1 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
