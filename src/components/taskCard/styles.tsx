import styled from "styled-components/native";

export const Container = styled.View`
  margin: 5px 0;
`;
export const Task = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 25px;
  padding: 8px;
`;

export const TaskText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  text-decoration: line-through;
`;
