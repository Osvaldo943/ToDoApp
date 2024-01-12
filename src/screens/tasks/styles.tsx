import { ThemeType } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 20px;
  background-color: "#000";
  align-items: "center";
  justify-content: "center";
`;

export const Text = styled.Text`
  color: white;
  background-color: ${({ theme }) => theme.COLORS.RED};
`;
