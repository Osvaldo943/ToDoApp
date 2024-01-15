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

import { TasksGetAll } from "../../storage/tasks/taskGetAll";
import { useFocusEffect } from "@react-navigation/core";

import { TASK_PROPS } from "../../@types/task";

export default function Tasks() {
  const [tasks, setTasks] = useState<TASK_PROPS[]>([]);
  const [tasksDone, setTasksDone] = useState<TASK_PROPS[]>([]);
  const [tasksToDo, setTasksToDo] = useState<TASK_PROPS[]>([]);

  const goToTasks = () => {};

  async function fetchAllTasks() {
    try {
      const data: TASK_PROPS[] = (await TasksGetAll()) || [];
      if (data) {
        console.log(data);
        setTasks(data);
        setTasksDone(data?.filter((task) => task.status == true));
        setTasksToDo(data?.filter((task) => task.status == false));
      }
    } catch (err) {
      console.log(err);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchAllTasks();
    }, [])
  );

  return (
    <>
      <Header />
      <Container>
        <Categories
          countAllTasks={tasks.length}
          countAllDoneTasks={tasksDone.length}
          countAllToDoTasks={tasksToDo.length}
        />
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
