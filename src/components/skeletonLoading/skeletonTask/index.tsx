import { ScrollView } from "react-native";

import {
  Container,
  Category,
  Title,
  CategoriesContainer,
  TaskList,
  ContainerTaskCard,
  Task,
  Hero,
} from "./styles";

export const SkeletonTasks: React.FC = () => {
  return (
    <Container>
      <Hero>
        <Title>Categorias</Title>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CategoriesContainer>
            <Category></Category>
            <Category></Category>
            <Category></Category>
          </CategoriesContainer>
        </ScrollView>
        <TaskList>
          <Title>Minhas tarefas</Title>
          <ScrollView>
            <ContainerTaskCard>
              <Task></Task>
            </ContainerTaskCard>
            <ContainerTaskCard>
              <Task></Task>
            </ContainerTaskCard>
            <ContainerTaskCard>
              <Task></Task>
            </ContainerTaskCard>
          </ScrollView>
        </TaskList>
      </Hero>
    </Container>
  );
};
