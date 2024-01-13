import { View, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";

import { Task, TaskText } from "./styles";

export const TaskCard: React.FC = () => {
  return (
    <View>
      <TouchableOpacity>
        <Task>
          <CheckBox />
          <TaskText>Tarefa 1</TaskText>
        </Task>
      </TouchableOpacity>
    </View>
  );
};
