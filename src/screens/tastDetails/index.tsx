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

export default function TaskDetails() {
  const [title, setTitle] = useState("dfaddffdsafsd");
  const [description, setDescription] = useState("asdfsdfdfdsf");

  const [isEditing, setIsEditing] = useState(true);

  const handleEditPress = () => {
    setIsEditing(!isEditing);
  };

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
            numberOfLines={10}
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
                    fontSize: 25,
                    textAlignVertical: "top",
                  }
            }
            editable={isEditing}
          />
        </View>
        {isEditing && (
          <BtnContainer>
            <TouchableOpacity onPress={handleEditPress}>
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
