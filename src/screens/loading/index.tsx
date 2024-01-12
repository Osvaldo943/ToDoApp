import { ActivityIndicator, View } from "react-native";

import { ActivityIndicatorContainer, Container, Logo } from "./styles";
import theme from "src/theme";

export default function Loading() {
  return (
    <Container>
      <Logo>ToDoAPP</Logo>
      <ActivityIndicatorContainer>
        <ActivityIndicator color={"#FF9900"} size={50} />
      </ActivityIndicatorContainer>
    </Container>
  );
}
