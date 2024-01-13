import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.BLACK};
  padding: 16px;
`;

export const TaskList = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
  padding: 16px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  font-size: ${({ theme }) => theme.FONT_SIZES.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-bottom: 8px;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  height: 55px;
  padding: 12px;
  color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  font-size: ${({ theme }) => theme.FONT_SIZES.SM}px;
  border-radius: 18px;
  margin-bottom: 32px;
`;
export const TextInputDescription = styled.TextInput`
  width: 100%;
  height: 150px;
  color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  font-size: ${({ theme }) => theme.FONT_SIZES.SM}px;
  padding: 12px;
  border-radius: 25px;
`;

export const BtnContainer = styled.View`
  align-items: end;
  justify-content: end;

  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const Button = styled.View`
  width: 110px;
  height: 60px;
  border-radius: 20px;
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
export const BtnText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
`;
