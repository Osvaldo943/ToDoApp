import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.BLACK};
  align-items: center;
  justify-content: center;
`;

export const TaskList = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
  padding: 0 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
