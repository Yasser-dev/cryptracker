import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-spinners/ClipLoader";
import { Line } from "react-chartjs-2";
import { Container } from "../Shared";
const CoinChart = ({ coinId }) => {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=30`)
      .then((res) => {
        setChartData(res.data);
        setLoading(false);
      });
    return () => {};
  }, []);
  return loading === true ? (
    <Container>
      <Loader color="white" size="4rem" />
    </Container>
  ) : (
    <div></div>
  );
};

export default CoinChart;
