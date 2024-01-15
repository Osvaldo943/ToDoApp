import {
  useNavigation,
  NavigationProp,
  useFocusEffect,
} from "@react-navigation/core";
import { View, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";

import { Container, Task, TaskText } from "./styles";
import { ReactNode, useCallback, useState } from "react";

import { RootParamlist } from "@src/@types/navigaton";
import { EditTaskStatus } from "../../storage/tasks/taskEditStatus";
import { TASK_PROPS } from "../../@types/task";
import { TasksGetAll } from "../../storage/tasks/taskGetAll";
interface TaskCardProps {
  title: string;
  status: boolean;
  pos?: number;
  onPress: () => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  pos = 0,
  title,
  status,
  ...rest
}) => {
  const [checked, setChecked] = useState(status);
  const navigation = useNavigation<NavigationProp<RootParamlist>>();

  const handleTaskDetails = () => {
    navigation.navigate("taskDetails", { idTask: pos });
  };

  const handleCheck = async () => {
    setChecked(!checked);
    await EditTaskStatus(pos, status);
  };

  async function fetchAllTasks() {
    try {
      const data: TASK_PROPS[] = (await TasksGetAll()) || [];

      if (data !== undefined) {
        setChecked(data[pos].status);
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
    <Container>
      <TouchableOpacity onPress={handleTaskDetails}>
        <Task>
          <CheckBox
            checked={checked}
            onPress={handleCheck}
            checkedColor="#FF9900"
            containerStyle={{
              backgroundColor: "transparent",
              borderWidth: 0,
            }}
          />
          <TaskText
            style={{
              textDecorationLine: checked ? "line-through" : "none",
              color: checked ? "#FF9900" : "#d9d9d9",
            }}
          >
            {title}
          </TaskText>
        </Task>
      </TouchableOpacity>
    </Container>
  );
};
