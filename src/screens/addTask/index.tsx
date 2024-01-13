import { useState } from "react";
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

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = (text: string) => {
    setTitle(text);
  };
  const handleDescription = (text: string) => {
    setDescription(text);
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
