import React, { Fragment, useEffect, useState } from "react";

import Loader from "react-spinners/ClipLoader";
import { Center, Container } from "../../components/Shared";
import { FcCandleSticks, FcLineChart } from "react-icons/fc";
import axios from "axios";
import DetailsHeader from "../../components/DetailsHeader/DetailsHeader";
import CoinLineChart from "../../components/CoinCharts/CoinLineChart";
import CoinCandleChart from "../../components/CoinCharts/CoinCandleChart";
import ChartTypeButtons from "../../components/ChartTypeButtons/ChartTypeButtons";

const Details = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [coinDetails, setCoinDetails] = useState();
  const [chartType, setChartType] = useState("line");

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
      <Center>
        <ChartTypeButtons chartType={chartType} setChartType={setChartType} />
      </Center>

      {chartType === "line" ? (
        <CoinLineChart coinId={match.params.id} />
      ) : (
        <CoinCandleChart coinId={match.params.id} />
      )}
    </Fragment>
  );
};

export default Details;
