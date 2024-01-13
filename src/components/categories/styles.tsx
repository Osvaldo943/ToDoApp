import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 200px;
  padding: 0 16px;
`;
export const CategoriesContainer = styled.View`
  width: 100%;
  padding: 8px 0;
  flex-direction: row;
`;
export const CategoriesList = styled.View`
  flex-direction: row;
`;

export const Category = styled.View`
  width: 200px;
  height: 150px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 25px;
  padding: 16px;
  margin-right: 8px;

  justify-content: center;

  shadow-color: #000;
  shadow-offset: 10px 10px;
  shadow-opacity: 0.9;
  shadow-radius: 4px;
  elevation: 8;
`;
export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZES.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin: 8px 0 16px;
`;
export const Cart = styled.View`
  position: relative;
  min-width: 100%;
  min-height: 4px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.COLORS.YELLOW};
  border-radius: 2px;
`;
export const CartLine = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  border-radius: 2px;
`;
