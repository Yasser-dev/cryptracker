import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainNavigation = styled.nav`
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  flex-flow: row nowrap;
  -webkit-font-smoothing: antialiased;
  height: 10vh;
  padding: 0 30px;
`;
export const MainNavigationLogoLink = styled(Link).attrs({
  to: "/",
})`
  display: flex;
  padding-top: 0.7em;
  flex: 0.5;
  align-items: start;
  justify-content: start;
  height: 100%;
  margin-right: 2em;
  transition: opacity 0.2s ease;
  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
  > img {
    margin: auto;
    height: 90%;
  }
`;
