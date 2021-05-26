import { ChartTypeButtonsContainer } from "./ChartTypeButtonsElements";
import { ReactComponent as LineIcon } from "../../assets/line-icon.svg";
import { ReactComponent as CandleIcon } from "../../assets/candlestick-icon.svg";
const ChartTypeButtons = ({ chartType, setChartType }) => {
  return (
    <ChartTypeButtonsContainer>
      <button
        className={chartType === "line" ? "selected left" : "left"}
        onClick={() => setChartType("line")}
      >
        <LineIcon />
      </button>
      <button
        className={chartType === "candlestick" ? "selected right" : "right"}
        onClick={() => setChartType("candlestick")}
      >
        <CandleIcon />
      </button>
    </ChartTypeButtonsContainer>
  );
};

export default ChartTypeButtons;
