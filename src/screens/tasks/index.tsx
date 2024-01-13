import { useState } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CheckBox } from "react-native-elements";

import { Container, TaskList, Title } from "./styles";

import theme from "src/theme";

import { TaskCard } from "../../components/taskCard";
import { PlusTaskBtn } from "../../components/plusTaskBtn";
import { Header } from "../../components/header";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    "Estudar JavaScript",
    "Limpar a casa",
    "Fazer tarefas",
  ]);

  const goToTasks = () => {};

  return (
    <>
      <Header />
      <Container>
        <TaskList>
          <Title>Minhas tarefas</Title>
          <ScrollView>
            {tasks.map((item, index) => (
              <TaskCard key={index} title={item} />
            ))}
          </ScrollView>
        </TaskList>
        <PlusTaskBtn />
      </Container>
    </>
  );
}
