import { Link } from "react-router-dom";
import styled from "styled-components";

export const ToolBarContainer = styled.div`
  font-size: 1em;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
`;

export const SelectItemsPerPage = styled.select`
  background-color: #273837;
  border-radius: 12px;
  height: 2rem;
  color: #e2e2e2;
  border: none;
  font-size: 1em;
  :focus {
    border: none;
    outline: none;
  }
  option {
    color: #e2e2e2;
  }
`;

export const ItemsPerPageContainer = styled.div`
  font-size: 1em;
  padding: 5px 10px;
  border-radius: 12px;
  background-color: #273837;
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  label {
    margin-right: 1em;
  }
`;

export const Search = styled.input`
  background-color: #273837;

  border-radius: 12px 0 0 12px;
  border: none !important;
  height: 2em;
  color: #e2e2e2;
  font-size: 1em;
  width: 15rem;
  :focus {
    outline: none;
  }
`;

export const SearchIconContainer = styled.div`
  background-color: #273837;

  border-radius: 0 12px 12px 0;
  border: none;
  height: 100%;
  color: #e2e2e2;
`;
export const SearchContainer = styled.div`
  font-size: 1em;
  padding: 5px 10px;
  border-radius: 12px;
  background-color: #273837;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchResultsContainer = styled.div`
  margin-top: 2.2em;
  border-radius: 0 0 0 0.5em;
  width: 15.5em;
  position: absolute;
  overflow-x: hidden;
  z-index: 1;
  background: #273837;
  padding: 1em 2em 1.5em 0.5em;
  color: black;
  height: 15vh;
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  ::-webkit-scrollbar {
    border-radius: 10px;
    width: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #273837;
    border-radius: 10px;
    background-image: -webkit-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.5) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0.5) 75%,
      transparent 75%,
      transparent
    );
  }
`;
export const SearchResult = styled(Link)`
  border-radius: 10px;
  color: #e2e2e2;
  text-decoration: none;
  padding: 0.5em;
  :hover {
    color: #b9b9b9;
    background-color: #394e4d;
  }
`;

export const SearchElements = styled.div`
  display: flex;
  flex-direction: column;
`;
