export const getCandleStickChartData = (chartData) => {
  let data = [];
  chartData.map((element) => {
    data.push({
      x: new Date(element[0]),
      y: element.slice(1, element.length),
    });
    return null;
  });
  return data;
};

export const getCandleChartOptions = (coinId, chartLabel, data) => {
  return {
    series: [
      {
        data: data,
      },
    ],
    options: {
      chart: {
        type: "candlestick",
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
        type: "datetime",
        labels: {
          style: {
            colors: "#b7b7b7",
          },
        },
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
        labels: {
          style: {
            colors: "#b7b7b7",
          },
        },
      },
    },
  };
};
