import React from "react";
import { Container } from "../components/Shared";
import error404 from "../assets/error_404.png";
const Error = () => {
  return (
    <Container>
      <img src={error404} width="200em" alt="error 404" />
    </Container>
  );
};

export default Error;
