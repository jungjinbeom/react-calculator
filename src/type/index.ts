export type OperationKeyType = Record<string, number>;

export type CalculateParams = Record<"first" | "second" | "operator", string>;

export type CalCulateType = {
  first: string;
  second: string;
  operator: string;
  computed: number;
  display: string;
};
