import { View, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";

import { Container, Task, TaskText } from "./styles";
import { useState } from "react";

interface TaskCardProps {
  title: string;
}

export const TaskCard: React.FC<TaskCardProps> = ({ title, ...rest }) => {
  const [checked, setChecked] = useState(false);
  return (
    <Container>
      <TouchableOpacity>
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
              color: checked ? "#FF9900" : "white",
            }}
          >
            {title}
          </TaskText>
        </Task>
      </TouchableOpacity>
    </Container>
  );
};
