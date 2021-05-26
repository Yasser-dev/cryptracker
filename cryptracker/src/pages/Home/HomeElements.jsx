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

export const SubmitSearchButton = styled.button`
  background-color: #273837;

  border-radius: 0 12px 12px 0;
  border: none;
  height: 100%;
  color: #e2e2e2;
  :hover {
    cursor: pointer;
  }
`;
export const SearchForm = styled.form`
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
