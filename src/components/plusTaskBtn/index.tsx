import { useNavigation, NavigationProp } from "@react-navigation/core";
import { TouchableOpacity } from "react-native";
import { Container, Button, Text } from "./styles";
import { RootParamlist } from "@src/@types/navigaton";

export const PlusTaskBtn: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootParamlist>>();

  const handleAddTask = () => {
    navigation.navigate("addTask");
  };

  return (
    <Container>
      <TouchableOpacity onPress={handleAddTask}>
        <Button>
          <Text>+</Text>
        </Button>
      </TouchableOpacity>
    </Container>
  );
};
