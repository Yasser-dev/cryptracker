import styled from "styled-components";
export const ItemsPerPageContainer = styled.div`
  font-size: 1em;
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  margin-bottom: 1em;
`;

export const SelectItemsPerPage = styled.select`
  width: 5%;
  height: 2rem;
  background: transparent;
  color: #ffffff;
  margin-left: 1em;
  padding-left: 1em;
  border: 0.2px solid white;
  font-size: 1em;
  option {
    color: #20976a;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;
