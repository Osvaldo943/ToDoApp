import { useState } from "react";
import { View, Text, TouchableOpacity, Touchable } from "react-native";
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

import { CheckBox } from "react-native-elements";

import { NotePencil, Trash } from "phosphor-react-native";

import { Header } from "../../components/header";

export default function TaskDetails() {
  const [title, setTitle] = useState("Fazer bolo do natal");
  const [description, setDescription] = useState(
    "Tenho que fazer um bom bolo para o natal porque vai cuiar muito"
  );

  const [isEditing, setIsEditing] = useState(true);
  const [checked, setChecked] = useState(false);

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
        <ActionsContainer>
          <Row>
            <CheckBox
              checked={checked}
              onPress={() => setChecked(!checked)}
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
              {checked ? "Feito" : "Fazer"}
            </StatusText>
          </Row>
          <Row>
            <NotePencilContainer onPress={handleEditPress}>
              <NotePencil color="#fff" />
            </NotePencilContainer>
            <TouchableOpacity>
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
