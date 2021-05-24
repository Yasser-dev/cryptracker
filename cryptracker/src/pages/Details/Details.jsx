import React from "react";
import { Container } from "../../components/Shared";

const Details = ({ match }) => {
  return <Container> {match.params.id}</Container>;
};

export default Details;
