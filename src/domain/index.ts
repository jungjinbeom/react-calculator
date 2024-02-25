import {
  NUMBER_LENGTH,
  OPERATOR_VALIDATE_MESSAGE,
  VALIDATE_MESSAGE,
} from "@/constant";
import { CalculateParams, OperationKeyType } from "@/type";
import { validate } from "@/util";

export const calculate = ({ first, second, operator }: CalculateParams) => {
  const result: OperationKeyType = {
    "+": Number(first) + Number(second),
    "-": Number(first) - Number(second),
    "/": Number(first) / Number(second),
    X: Number(first) * Number(second),
  };

  return result[operator];
};

export const validOperator = (data: string) => {
  validate(!data, OPERATOR_VALIDATE_MESSAGE);
};

export const validNumberLength = (data: string) => {
  validate(data.length >= NUMBER_LENGTH, VALIDATE_MESSAGE);
};
