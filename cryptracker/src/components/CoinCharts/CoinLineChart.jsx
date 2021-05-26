import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import "./charts.styles.css";
import Loader from "react-spinners/ClipLoader";
import { Center, Container } from "../Shared";
import DurationButtons from "../DurationButtons/DurationButtons";

const CoinLineChart = ({ coinId }) => {
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
  }, [coinId, chartDuration]);
  let chartOptions = {};
  if (chartData) {
    let dates = [];
    let data = [];
    chartData.prices.map((element) => {
      dates.push(
        new Date(element[0]).toLocaleString().split(",")[
          chartDuration === "1" ? 1 : 0
        ]
      );
      data.push(element[1]);
      return null;
    });
    chartOptions = {
      series: [
        {
          name: "Price",
          data: data,
        },
      ],
      options: {
        chart: {
          type: "line",
          zoom: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          colors: "#68e397",
          curve: "smooth",
          width: 3,
        },
        title: {
          text: `${coinId.toUpperCase()} Price (${chartLabel})`,
          align: "left",
          style: {
            fontSize: "12px",
            fontWeight: "bold",
            fontFamily: undefined,
            color: "#ffffff",
          },
        },

        xaxis: {
          labels: {
            showDuplicates: false,
            style: {
              colors: "#b7b7b7",
            },
          },
          categories: dates,
        },
        yaxis: {
          labels: {
            style: {
              colors: "#b7b7b7",
            },
          },
        },
      },
    };
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
        type="line"
      />
    </Center>
  );
};

export default CoinLineChart;
