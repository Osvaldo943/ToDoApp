import { TouchableOpacity } from "react-native";
import { Container, Button, Text } from "./styles";

export const PlusTaskBtn: React.FC = () => {
  return (
    <Container>
      <TouchableOpacity>
        <Button>
          <Text>+</Text>
        </Button>
      </TouchableOpacity>
    </Container>
  );
};
