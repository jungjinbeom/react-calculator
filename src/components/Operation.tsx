import { EQUAL, OPERATIONS } from "@/constant";

interface OperationProps {
  onClickOperation: (operation: string) => void;
  onClickCalculate: () => void;
}
const Operation = ({ onClickOperation, onClickCalculate }: OperationProps) => {
  return (
    <div className="operations subgrid">
      {Object.values(OPERATIONS).map((operation) => (
        <button
          key={operation}
          className="operation"
          onClick={() => onClickOperation(operation)}
        >
          {operation}
        </button>
      ))}
      <button className="operation" onClick={onClickCalculate}>
        {EQUAL}
      </button>
    </div>
  );
};

export default Operation;
