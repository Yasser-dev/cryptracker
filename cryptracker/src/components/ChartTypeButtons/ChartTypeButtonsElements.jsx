import styled from "styled-components";

export const ChartTypeButtonsContainer = styled.div`
  background-color: #273837;

  padding: 5px;
  border-radius: 12px;
  margin-bottom: 0.5em;
  display: flex;
  justify-content: center;
  button {
    height: 30px;
    width: 40px;
    border: none;
    background-color: inherit;

    :hover {
      background-color: #304241;
    }
  }
  button.left {
    border-right: 0.25px solid #304241;
  }
  button.right {
    border-left: 0.25px solid #304241;
  }
  button svg {
    width: 100%;
    fill: #e2e2e2;
  }

  button.selected {
    background-color: #3b504f;
  }

  button:first-child {
    border-radius: 8px 0 0 8px;
  }

  button:last-child {
    border-radius: 0 8px 8px 0;
  }
`;
