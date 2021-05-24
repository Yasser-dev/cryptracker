import React from "react";
import logo from "../../assets/logoh.png";
import { MainNavigation, MainNavigationLogoLink } from "./HeaderElements";

const Header = () => {
  return (
    <MainNavigation>
      <MainNavigationLogoLink>
        <img src={logo} alt="logo" />
      </MainNavigationLogoLink>
    </MainNavigation>
  );
};

export default Header;
