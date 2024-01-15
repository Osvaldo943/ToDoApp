import React from "react";

import { Container, IconsGroup, SearchIcon } from "./styles";

import { MyLogo } from "../../components/logo";

import { Bell, MagnifyingGlass } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export const Header: React.FC = () => {
  return (
    <Container>
      <MyLogo />
      <IconsGroup>
        {/*
        <SearchIcon>
            
          <TouchableOpacity>
            <MagnifyingGlass color="white" size={20} />
          </TouchableOpacity>
        </SearchIcon>
        */}
        <TouchableOpacity>
          <Bell color="white" size={20} />
        </TouchableOpacity>
      </IconsGroup>
    </Container>
  );
};
