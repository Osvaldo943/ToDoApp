import { NavigationProp, useNavigation } from "@react-navigation/core";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useRoute } from "@react-navigation/core";

import { View, Text, TouchableOpacity, Touchable } from "react-native";
import { CheckBox } from "react-native-elements";

import {
  Container,
  TextInputDescription,
  TextInput,
  Label,
  BtnContainer,
  Button,
  BtnText,
  ActionsContainer,
  Row,
  StatusText,
  NotePencilContainer,
} from "./styles";
import { NotePencil, Trash } from "phosphor-react-native";

import { Header } from "../../components/header";

type RouteParams = {
  idTask: number;
};

import { TASK_PROPS } from "../../@types/task";

import { TasksGetAll } from "../../storage/tasks/taskGetAll";
import { EditOneTask } from "../../storage/tasks/taskEditOne";
import { EditTaskStatus } from "../../storage/tasks/taskEditStatus";
import { RemoveTask } from "../../storage/tasks/taskRemoveTask";

import { RootParamlist } from "../../@types/navigaton";

export default function TaskDetails() {
  const navigation = useNavigation<NavigationProp<RootParamlist>>();
  const route = useRoute();
  const { idTask } = route.params as RouteParams;

  const [tasks, setTasks] = useState<TASK_PROPS[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleTitle = (text: string) => {
    setTitle(text);
  };
  const handleDescription = (text: string) => {
    setDescription(text);
  };

  useFocusEffect(
    useCallback(() => {
      setChecked(false);
    }, [])
  );
  const handleCheck = async () => {
    setChecked(!checked);
    await EditTaskStatus(idTask, checked);
    console.log("Trocando de status");
  };
  const handleEditPress = () => {
    setIsEditing(!isEditing);
  };

  const handleEditTask = async () => {
    const task: TASK_PROPS = {
      description: description,
      status: checked,
      title: title,
    };
    await EditOneTask(idTask, task);
    setIsEditing(false);
  };

  const handleRemoveTask = async () => {
    await RemoveTask(idTask);
    navigation.navigate("tasks");
  };

  async function fetchAllTasks() {
    try {
      const data: TASK_PROPS[] = (await TasksGetAll()) || [];

      if (data !== undefined) {
        setTitle(data[idTask].title);
        setDescription(data[idTask].description);
        setChecked(data[idTask].status);
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
        <ActionsContainer>
          <Row>
            <CheckBox
              checked={checked}
              onPress={handleCheck}
              checkedColor="#FF9900"
              containerStyle={{
                backgroundColor: "transparent",
                borderWidth: 0,
              }}
            />
            <StatusText
              style={{
                color: checked ? "#FF9900" : "#9D9D9D",
                textDecorationLine: checked ? "line-through" : "none",
              }}
            >
              {checked ? "Tarefa Nº" : "Tarefa Nº"} {idTask}
            </StatusText>
          </Row>
          <Row>
            <NotePencilContainer onPress={handleEditPress}>
              <NotePencil color="#fff" />
            </NotePencilContainer>
            <TouchableOpacity onPress={handleRemoveTask}>
              <Trash color="#F75555" />
            </TouchableOpacity>
          </Row>
        </ActionsContainer>
        <View>
          <Label>{isEditing ? "Título:" : ""}</Label>
          <TextInput
            value={title}
            onChangeText={handleTitle}
            style={
              isEditing
                ? { borderColor: title == "" ? "#29292E" : "#ff9900" }
                : { borderColor: "transparent", fontSize: 30 }
            }
            editable={isEditing}
          />
        </View>
        <View>
          <Label>{isEditing ? "Descrição:" : ""}</Label>
          <TextInputDescription
            multiline
            numberOfLines={50}
            value={description}
            onChangeText={handleDescription}
            style={
              isEditing
                ? {
                    borderColor: title == "" ? "#29292E" : "#ff9900",
                    textAlignVertical: "top",
                  }
                : {
                    borderColor: "transparent",
                    fontSize: 20,
                    textAlignVertical: "top",
                  }
            }
            editable={isEditing}
          />
        </View>
        {isEditing && (
          <BtnContainer>
            <TouchableOpacity onPress={handleEditTask}>
              <Button
                style={{
                  backgroundColor:
                    description == "" || title == "" ? "#29292E" : "#FF9900",
                }}
              >
                <BtnText
                  style={{
                    color:
                      description == "" || title == "" ? "white" : "#121214",
                  }}
                >
                  Editar
                </BtnText>
              </Button>
            </TouchableOpacity>
          </BtnContainer>
        )}
      </Container>
    </>
  );
}
