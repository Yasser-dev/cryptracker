import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Loader from "react-spinners/ClipLoader";
import { Center, Container } from "../../components/Shared";
import axios from "axios";
import DetailsHeader from "../../components/DetailsHeader/DetailsHeader";
import CoinLineChart from "../../components/CoinCharts/CoinLineChart";
import CoinCandleChart from "../../components/CoinCharts/CoinCandleChart";
import ChartTypeButtons from "../../components/ChartTypeButtons/ChartTypeButtons";

const Details = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [coinDetails, setCoinDetails] = useState();
  const [chartType, setChartType] = useState("line");
  const history = useHistory();

  const loadData = async () => {
    try {
      let { data } = await axios.get(`/api/v3/coins/${match.params.id}/`);
      if (!data) return history.push("/404");
      setCoinDetails(data);
      setLoading(false);
    } catch (error) {
      return history.push("/404");
    }
  };

  useEffect(() => {
    setLoading(true);
    loadData();
  }, [match]);
  return loading === true ? (
    <Container>
      <Loader color="#e2e2e2" size="6rem" />
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
