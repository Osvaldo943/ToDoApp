import { useNavigation, NavigationProp } from "@react-navigation/core";

import { TouchableOpacity } from "react-native";
import { Logo } from "./styles";
import { RootParamlist } from "../../@types/navigaton";

export const MyLogo: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootParamlist>>();

  function handleTasks() {
    navigation.navigate("tasks");
  }
  return (
    <TouchableOpacity onPress={handleTasks}>
      <Logo>TDA</Logo>
    </TouchableOpacity>
  );
};
