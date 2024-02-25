import { CALCULATOR_MAX_DIGIT } from "@/constant";

interface DigitProps {
  onClick: (digit: number) => void;
}

const Digit = ({ onClick }: DigitProps) => {
  return (
    <div className="digits flex">
      {CALCULATOR_MAX_DIGIT.map((digit) => (
        <button key={digit} className="digit" onClick={() => onClick(digit)}>
          {digit}
        </button>
      ))}
    </div>
  );
};

export default Digit;
