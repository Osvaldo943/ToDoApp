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

interface CategoriesProps {
  countAllTasks?: number;
  countAllDoneTasks?: number;
  countAllToDoTasks?: number;
}

export const Categories: React.FC<CategoriesProps> = ({
  countAllTasks,
  countAllToDoTasks,
  countAllDoneTasks,
}) => {
  return (
    <Container>
      <Title>Categorias</Title>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <CategoriesContainer>
          <Category>
            <Text>Tu tens</Text>
            <SubTitle>{countAllTasks} Tarefa(s)</SubTitle>
            <Cart></Cart>
          </Category>
          <Category>
            <Text>Tu tens</Text>
            <SubTitle>{countAllDoneTasks} Feita(s)</SubTitle>
            <Cart style={{ backgroundColor: "#121214" }}>
              <CartLine
                style={{ backgroundColor: "#2D9C73", width: "30%" }}
              ></CartLine>
            </Cart>
          </Category>
          <Category>
            <Text>Tu tens</Text>
            <SubTitle>{countAllToDoTasks} Não feita(s)</SubTitle>
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
