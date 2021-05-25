import React, { useEffect, useState } from "react";

import Loader from "react-spinners/ClipLoader";
import { Container } from "../../components/Shared";

import axios from "axios";
import DetailsHeader from "../../components/DetailsHeader/DetailsHeader";

const Details = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [coinDetails, setCoinDetails] = useState();
  const [chartData, setChartData] = useState();

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/v3/coins/${match.params.id}/`).then((res) => {
      setCoinDetails(res.data);
      axios
        .get(
          `/api/v3/coins/${match.params.id}/market_chart?vs_currency=usd&days=30`
        )
        .then((res) => {
          setChartData(res.data);
          setLoading(false);
        });
    });
    return () => {};
  }, [match]);
  console.log("COINDETAILS", coinDetails);
  return loading === true ? (
    <Container>
      <Loader color="white" size="6rem" />
    </Container>
  ) : (
    <DetailsHeader coinDetails={coinDetails} />
  );
};

export default Details;
