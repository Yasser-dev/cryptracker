import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-spinners/ClipLoader";
import { Line } from "react-chartjs-2";
import { Center, Container } from "../Shared";
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
  }, [coinId]);
  let config;
  if (chartData) {
    let labels = [];
    let data = [];
    chartData.prices.map((element) => {
      labels.push(new Date(element[0]).toLocaleString().split(",")[0]);
      data.push(element[1]);
    });
    config = {
      labels: labels,
      datasets: [
        {
          label: `${coinId.toUpperCase()} Price (Last 30 Days)`,
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
  console.log("CONFIG", config);
  return loading === true ? (
    <Container>
      <Loader color="white" size="4rem" />
    </Container>
  ) : (
    <Center>
      <div style={{ width: "60%" }}>
        <Line data={config} />
      </div>
    </Center>
  );
};

export default CoinChart;
