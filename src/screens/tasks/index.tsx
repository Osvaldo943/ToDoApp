import { ActivityIndicator, View, Text, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";

import { Container, TaskList, Task, TaskText } from "./styles";

import theme from "src/theme";

import { TaskCard } from "../../components/taskCard";

export default function Tasks() {
  const goToTasks = () => {};

  return (
    <Container>
      <TaskList>
        <TaskCard />
      </TaskList>
    </Container>
  );
}
