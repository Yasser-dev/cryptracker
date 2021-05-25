import React, { Fragment, useEffect, useState } from "react";

import Loader from "react-spinners/ClipLoader";
import { Container } from "../../components/Shared";

import axios from "axios";
import DetailsHeader from "../../components/DetailsHeader/DetailsHeader";
import CoinChart from "../../components/CoinChart/CoinChart";

const Details = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [coinDetails, setCoinDetails] = useState();

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/v3/coins/${match.params.id}/`).then((res) => {
      setCoinDetails(res.data);
      setLoading(false);
    });
    return () => {};
  }, [match]);
  return loading === true ? (
    <Container>
      <Loader color="white" size="6rem" />
    </Container>
  ) : (
    <Fragment>
      <DetailsHeader coinDetails={coinDetails} />

      <CoinChart coinId={match.params.id} />
    </Fragment>
  );
};

export default Details;
