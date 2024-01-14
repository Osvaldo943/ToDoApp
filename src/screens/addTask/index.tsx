import { useState } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/core";
import { View, Text, TouchableOpacity } from "react-native";
import {
  Container,
  TextInputDescription,
  TextInput,
  Label,
  BtnContainer,
  Button,
  BtnText,
} from "./styles";
import { Header } from "../../components/header";
import { taskCreate } from "../../storage/tasks/taskCreate";

import { RootParamlist } from "../../@types/navigaton";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigation = useNavigation<NavigationProp<RootParamlist>>();

  const handleTitle = (text: string) => {
    setTitle(text);
  };
  const handleDescription = (text: string) => {
    setDescription(text);
  };

  const handleAddTask = async () => {
    await taskCreate({ status: false, title: title, description: description });
    navigation.navigate("tasks");
  };

  return (
    <>
      <Header />
      <Container>
        <View>
          <Label>Título</Label>
          <TextInput
            value={title}
            onChangeText={handleTitle}
            style={{ borderColor: title == "" ? "#29292E" : "#FF9900" }}
          />
        </View>
        <View>
          <Label>Descrição</Label>
          <TextInputDescription
            multiline
            numberOfLines={10}
            value={description}
            onChangeText={handleDescription}
            style={{
              borderColor: description == "" ? "#29292E" : "#FF9900",
              textAlignVertical: "top",
            }}
          />
        </View>
        <BtnContainer>
          <TouchableOpacity>
            <Button
              style={{
                backgroundColor:
                  description == "" || title == "" ? "#29292E" : "#FF9900",
              }}
            >
              <BtnText
                style={{
                  color: description == "" || title == "" ? "white" : "#121214",
                }}
                onPress={handleAddTask}
              >
                Adicionar +
              </BtnText>
            </Button>
          </TouchableOpacity>
        </BtnContainer>
      </Container>
    </>
  );
}
