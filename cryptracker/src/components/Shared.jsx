import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 95%;
  min-height: 80vh;
  color: #e2e2e2;
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

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
`;
