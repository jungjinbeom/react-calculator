import { ERROR_INFINITY } from "@/constant";
import { CalCulateType } from "@/type";

interface CalculateDisplay {
  calculateState: CalCulateType;
}

const CalculateDisplay = (calculateState: CalCulateType) => {
  const { display, computed } = calculateState;
  const result = computed === Infinity ? ERROR_INFINITY : Math.floor(computed);
  return <h1 id="total">{result || display || 0}</h1>;
};

export default CalculateDisplay;
