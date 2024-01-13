import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.BLACK};
  align-items: center;
  justify-content: center;
`;

export const TaskList = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
  margin-top: 40px;
  padding: 16px;
`;

export const Task = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 25px;
  padding: 8px;
`;

export const TaskText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZES.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;