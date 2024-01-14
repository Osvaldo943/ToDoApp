import { useCallback, useEffect, useState } from "react";
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

import { Header } from "../../components/header";
import { TaskCard } from "../../components/taskCard";
import { PlusTaskBtn } from "../../components/plusTaskBtn";
import { Categories } from "../../components/categories";

import { TasksGetAll } from "../../storage/tasks/getAllTasks";
import { useFocusEffect } from "@react-navigation/core";

import { TASK_PROPS } from "../../@types/task";

export default function Tasks() {
  const [tasks, setTasks] = useState<TASK_PROPS[]>([]);

  const goToTasks = () => {};

  async function fetchAllTasks() {
    try {
      const data = await TasksGetAll();
      if (tasks) setTasks(data);
    } catch (err) {
      console.log(err);
    }
  }
  useFocusEffect(
    useCallback(() => {
      console.log("Tasks", tasks);
      fetchAllTasks();
    }, [])
  );

  return (
    <>
      <Header />
      <Container>
        <Categories />
        <TaskList>
          <Title>Minhas tarefas</Title>
          <ScrollView>
            {tasks.map((item: TASK_PROPS, index) => (
              <TaskCard
                key={index}
                pos={index}
                title={item.title}
                status={item.status}
              />
            ))}
          </ScrollView>
        </TaskList>
        <PlusTaskBtn />
      </Container>
    </>
  );
}
