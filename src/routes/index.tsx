import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

import AppRoutes from "./app.routes";

import styled from "styled-components/native";

const VV = styled.View`
  background-color: red;
  flex: 1;
`;

export function Routes() {
  return (
    <VV>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </VV>
  );
}

