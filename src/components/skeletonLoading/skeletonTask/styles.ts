import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const Hero = styled.View`
  width: 100%;
  margin-top: 30px;
`;
export const CategoriesContainer = styled.View`
  width: 100%;
  padding: 8px 0;
  flex-direction: row;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-left: 16px;
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
  margin-left: 16px;
  margin-right: -8px;

  opacity: 0.3;

  justify-content: center;

  shadow-color: #000;
  shadow-offset: 10px 10px;
  shadow-opacity: 0.9;
  shadow-radius: 4px;
  elevation: 8;
`;

export const TaskList = styled.View`
  width: 100%;
  flex-direction: column;
  padding: 0 16px;
  margin-top: 10px;
`;
export const ContainerTaskCard = styled.View`
  margin: 5px 0;
`;
export const Task = styled.View`
  height: 70px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 25px;
  padding: 8px;
  opacity: 0.3;
`;
