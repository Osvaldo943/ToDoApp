import styled from "styled-components/native";

export const Container = styled.View`
  align-items: end;
  justify-content: end;

  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const Button = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
  background-color: ${({ theme }) => theme.COLORS.YELLOW};
  align-items: center;
  justify-content: center;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.7;
  shadow-radius: 3px;

  elevation: 5;
`;
export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 40px;
  color: ${({ theme }) => theme.COLORS.BLACK};
`;
