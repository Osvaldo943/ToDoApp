import { ScrollView } from "react-native";

import {
  Container,
  Category,
  Text,
  SubTitle,
  Title,
  Cart,
  CartLine,
  CategoriesContainer,
} from "./styles";

export const Categories: React.FC = () => {
  return (
    <Container>
      <Title>Categorias</Title>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <CategoriesContainer>
          <Category>
            <Text>Tu tens</Text>
            <SubTitle>20 Tarefa(s)</SubTitle>
            <Cart></Cart>
          </Category>
          <Category>
            <Text>Tu tens</Text>
            <SubTitle>20 Feita(s)</SubTitle>
            <Cart style={{ backgroundColor: "#121214" }}>
              <CartLine
                style={{ backgroundColor: "#2D9C73", width: "30%" }}
              ></CartLine>
            </Cart>
          </Category>
          <Category>
            <Text>Tu tens</Text>
            <SubTitle>20 Não feita(s)</SubTitle>
            <Cart style={{ backgroundColor: "#121214" }}>
              <CartLine
                style={{ backgroundColor: "#F75555", width: "80%" }}
              ></CartLine>
            </Cart>
          </Category>
        </CategoriesContainer>
      </ScrollView>
    </Container>
  );
};
