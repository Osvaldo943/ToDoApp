import { useState } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CheckBox } from "react-native-elements";

import { Container, TaskList, Task, TaskText } from "./styles";

import theme from "src/theme";

import { TaskCard } from "../../components/taskCard";
import { PlusTaskBtn } from "../../components/plusTaskBtn";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    "Estudar JavaScript",
    "Limpar a casa",
    "Fazer tarefas",
  ]);

  const goToTasks = () => {};

  return (
    <Container>
      <TaskList>
        <ScrollView>
          {tasks.map((item, index) => (
            <TaskCard key={index} title={item} />
          ))}
        </ScrollView>
      </TaskList>
      <PlusTaskBtn />
    </Container>
  );
}
