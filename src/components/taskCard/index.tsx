import { useNavigation, NavigationProp } from "@react-navigation/core";
import { View, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";

import { Container, Task, TaskText } from "./styles";
import { useState } from "react";

import { RootParamlist } from "@src/@types/navigaton";
interface TaskCardProps {
  title: string;
  status: boolean;
  pos?: number;
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
  return (
    <Container>
      <TouchableOpacity onPress={handleTaskDetails}>
        <Task>
          <CheckBox
            checked={checked}
            onPress={() => setChecked(!checked)}
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
