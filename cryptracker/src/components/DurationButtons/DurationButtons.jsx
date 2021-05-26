import { DurationButtonsContainer } from "./DurationButtonsElements";
const DurationButtons = ({
  chartDuration,
  setChartLabel,
  setChartDuration,
}) => {
  return (
    <DurationButtonsContainer>
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
          setChartLabel("Last 3 Months");
          setChartDuration("90");
        }}
        className={chartDuration === "90" ? "selected" : ""}
      >
        3m
      </button>
      <button
        onClick={() => {
          setChartLabel("Last 6 Months");
          setChartDuration("180");
        }}
        className={chartDuration === "180" ? "selected" : ""}
      >
        6m
      </button>
      <button
        onClick={() => {
          setChartLabel("Last Year");
          setChartDuration("365");
        }}
        className={chartDuration === "365" ? "selected" : ""}
      >
        1y
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
    </DurationButtonsContainer>
  );
};

export default DurationButtons;
