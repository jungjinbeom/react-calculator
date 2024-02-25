import { calculate, validOperator, validNumberLength } from "@/domain";

import { useState } from "react";

const initialState = {
  first: "",
  second: "",
  operator: "",
  display: "",
  computed: 0,
};

const useCalculate = () => {
  const [calculateState, setCalculateState] = useState(initialState);
  const { first, second, operator, display } = calculateState;

  const onClickDigit = (digit: number) => {
    try {
      if (!operator) {
        validNumberLength(first);
        setCalculateState({
          ...initialState,
          first: first + digit,
          display: display + digit,
        });
        return;
      }

      if (operator) {
        validNumberLength(second);
        setCalculateState((prev) => ({
          ...prev,
          second: second + digit,
          display: display + digit,
        }));
      }
    } catch (e) {
      alert(e);
    }
  };

  const onClickOperation = (operation: string) => {
    try {
      validOperator(first);
      setCalculateState((prev) => ({
        ...prev,
        operator: operation,
        display: display + operation,
      }));
    } catch (error) {
      alert(error);
    }
  };

  const onClickCalculate = () => {
    const computed = calculate({ first, second, operator });
    setCalculateState({ ...initialState, computed });
  };

  const reset = () => {
    setCalculateState(initialState);
  };

  return {
    calculateState,
    onClickCalculate,
    onClickOperation,
    onClickDigit,
    reset,
  };
};

export default useCalculate;
