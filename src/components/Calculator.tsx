import useCalculate from "@/hook/useCalculate";
import CalculateDisplay from "./CalculateDisplay";
import Digit from "./Digit";
import Modifier from "./Modifier";
import Operation from "./Operation";

const Calculrator = () => {
  const {
    calculateState,
    onClickCalculate,
    onClickOperation,
    onClickDigit,
    reset,
  } = useCalculate();

  return (
    <div className="calculator">
      <CalculateDisplay {...calculateState} />
      <Digit onClick={onClickDigit} />
      <Modifier onClick={reset} />
      <Operation
        onClickOperation={onClickOperation}
        onClickCalculate={onClickCalculate}
      />
    </div>
  );
};

export default Calculrator;
