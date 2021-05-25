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
      .get(
        `/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${chartDuration}`
      )
      .then((res) => {
        setChartData(res.data);
        setLoading(false);
      });
    return () => {};
  }, [coinId, chartDuration]);
  let config;
  if (chartData) {
    let labels = [];
    let data = [];
    chartData.prices.map((element) => {
      labels.push(
        new Date(element[0]).toLocaleString().split(",")[
          chartDuration === "1" ? 1 : 0
        ]
      );
      data.push(element[1]);
      return null;
    });
    config = {
      labels: labels,
      datasets: [
        {
          label: `${coinId.toUpperCase()} Price (${chartLabel})`,
          data: data,
          borderColor: "rgb(83, 223, 153)",
          pointStyle: "crossRot",
          elements: {
            line: {
              borderWidth: 0,
            },
            point: {
              borderWidth: 1,
            },
            // tension: 0.3,
          },
        },
      ],
    };
  }

  return loading === true ? (
    <Container>
      <Loader color="white" size="4rem" />
    </Container>
  ) : (
    <Center style={{ flexDirection: "column" }}>
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
      <div style={{ width: "60%", marginBottom: "2em" }}>
        <Line data={config} />
      </div>
    </Center>
  );
};

export default CoinChart;
