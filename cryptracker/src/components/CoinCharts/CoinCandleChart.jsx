import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-spinners/ClipLoader";
import { Line } from "react-chartjs-2";
import { Center, Container } from "../Shared";
import { DurationButtons } from "./CoinChartElements";
const CoinChart = ({ coinId }) => {
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
    return () => {};
  }, [coinId, chartDuration]);

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
      <DurationButtons>
        <button
          onClick={() => {
            setChartLabel("Last 24 Hours");
            setChartDuration("1");
          }}
          className={chartDuration === "1" ? "selected" : ""}
        >
          1d
        </button>
        <button
          onClick={() => {
            setChartLabel("Last Week");
            setChartDuration("7");
          }}
          className={chartDuration === "7" ? "selected" : ""}
        >
          7d
        </button>
        <button
          onClick={() => {
            setChartLabel("Last Month");
            setChartDuration("30");
          }}
          className={chartDuration === "30" ? "selected" : ""}
        >
          30d
        </button>
        <button
          onClick={() => {
            setChartLabel("All Time");
            setChartDuration("max");
          }}
          className={chartDuration === "max" ? "selected" : ""}
        >
          Max
        </button>
      </DurationButtons>
    </Center>
  );
};

export default CoinChart;
