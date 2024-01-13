import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 32px 16px 16px;
  background-color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const IconsGroup = styled.View`
  flex-direction: row;
`;
export const SearchIcon = styled.View`
  margin-right: 16px;
`;
