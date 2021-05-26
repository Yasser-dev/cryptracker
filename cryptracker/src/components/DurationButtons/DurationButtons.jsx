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
