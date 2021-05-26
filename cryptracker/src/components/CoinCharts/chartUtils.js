export const getLineChartData = (chartData) => {
  let data = [];
  chartData.prices.map((element) => {
    data.push({ x: new Date(element[0]), y: element[1] });
    return null;
  });
  return data;
};

export const getLineChartOptions = (coinId, chartLabel, data) => {
  return {
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
      colors: ["#68e397"],
      stroke: {
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
        type: "datetime",
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
};
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
