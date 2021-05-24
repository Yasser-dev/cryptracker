import styled from "styled-components";
import { flexEnd, flexStart } from "../../components/Shared";

export const Description = styled.div`
  margin-left: 2.5em;
  display: flex;
  align-items: center;
  height: 3rem;
  width: 100%;
  background-color: #011413;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
  position: sticky;
  font-weight: bold;
  top: 0;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  background-color: #011413;
  height: 3.5rem;
  margin-bottom: 0.2rem;
  :hover {
    cursor: pointer;

    background-color: #273837;
  }
`;

export const Ul = styled.ul`
  width: 100%;
`;

export const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 5%;
`;
export const Name = styled.div`
  height: 100%;
  width: 20%;
  ${flexStart};
`;
export const Price = styled.div`
  height: 100%;
  width: 10%;
  ${flexEnd}
`;

export const Change24 = styled.div`
  height: 100%;
  width: 10%;
  ${flexEnd}
`;

export const MarketCap = styled.div`
  height: 100%;
  width: 15%;
  ${flexEnd}
`;

export const Volume = styled.div`
  height: 100%;
  width: 15%;
  ${flexEnd}
`;

export const TotalSupply = styled.div`
  height: 100%;
  width: 20%;
  ${flexEnd}
`;

export const Icon = styled.img`
  height: 2rem;
  width: 2rem;
  margin-left: 1rem;
`;

export const CoinName = styled.p`
  width: 15rem;
  margin-left: 1rem;
`;

export const CoinSymbol = styled.div`
  ${flexStart}
  color: grey;
  width: 5rem;
  height: 100%;
  margin-left: 1rem;
`;
