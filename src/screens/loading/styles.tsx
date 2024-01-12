import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.BLACK};
  align-items: center;
  justify-content: center;
`;

export const ActivityIndicatorContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Text`
  color: ${({ theme }) => theme.COLORS.YELLOW};
  font-size: 30px;

  font-weight: bold;
  font-style: italic;
`;
