import React, { useEffect, useState } from "react";
import axios from "axios";
import "./charts.styles.css";
import Loader from "react-spinners/ClipLoader";
import ReactApexChart from "react-apexcharts";
import { Center, Container } from "../Shared";
import DurationButtons from "../DurationButtons/DurationButtons";
import { getCandleChartOptions, getCandleStickChartData } from "./chartUtils";

const CoinCandleChart = ({ coinId }) => {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState();
  const [chartDuration, setChartDuration] = useState("7");
  const [chartLabel, setChartLabel] = useState("Last Week");
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/v3/coins/${coinId}/ohlc?vs_currency=usd&days=${chartDuration}`)
      .then((res) => {
        setChartData(res.data);
        setLoading(false);
      });
  }, [coinId, chartDuration]);

  let chartOptions = {};
  if (chartData) {
    chartOptions = getCandleChartOptions(
      coinId,
      chartLabel,
      getCandleStickChartData(chartData)
    );
  }

  return loading === true ? (
    <Container>
      <Loader color="white" size="4rem" />
    </Container>
  ) : (
    <Center
      style={{
        flexDirection: "column",
      }}
    >
      <DurationButtons
        chartDuration={chartDuration}
        setChartLabel={setChartLabel}
        setChartDuration={setChartDuration}
      />
      <ReactApexChart
        style={{ width: "60%" }}
        options={chartOptions.options}
        series={chartOptions.series}
        type="candlestick"
      />
    </Center>
  );
};

export default CoinCandleChart;
