export const validate = (result: any, message: string) => {
  if (result) {
    throw new Error(message);
  }
};
