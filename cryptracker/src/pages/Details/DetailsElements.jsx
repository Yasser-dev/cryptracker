import styled from "styled-components";
export const Container = styled.div`
  color: white;
  width: 100%;
  height: 7rem;

  display: flex;
  flex-direction: column;
`;
export const Button = styled.button`
  background-color: #2d3748;
  border: none;
  border-radius: 0.2rem;
  outline: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 1.5rem;
  margin-right: 1rem;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
export const Top = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Path = styled.p`
  margin-left: 0.5rem;
  font-size: 0.8rem;
  color: grey;
`;

export const TopPrice = styled.p`
  margin-right: 1rem;
  font-size: 0.8rem;
  color: grey;
`;

export const Middle = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FirstHalf = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 50%;
`;

export const SecondHalf = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 50%;
`;

export const Name = styled.div`
  font-weight: bolder;
  font-size: 1.5rem;
  margin-left: 0.8rem;
`;

export const Symbol = styled.div`
  font-weight: bolder;
  font-size: 1.5rem;
  margin-left: 0.8rem;
  color: grey;
`;

export const Price = styled.div`
  font-weight: bolder;
  font-size: 2rem;
`;

export const Change24 = styled.div`
  width: fit-content;
  border-radius: 0.3rem;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0rem 1rem 0rem 1rem;
`;

export const Icon = styled.img`
  margin-left: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
`;

export const Bottom = styled.div`
  height: 45%;
  display: flex;
  align-items: center;
`;

export const Random = styled.p`
  background-color: #273837;
  color: lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.1rem 0.5rem 0.1rem 0.5rem;
  margin: 1rem;
  width: fit-content;
  border-radius: 0.2rem;
`;

export const Link = styled.a`
  color: inherit;
  text-decoration: none;
  margin-left: 0.4rem;
`;
