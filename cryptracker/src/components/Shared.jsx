import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 95%;
  min-height: 100vh;
  color: white;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const flexStart = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const flexEnd = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
