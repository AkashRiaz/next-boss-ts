const logLength = <T extends { length: number }>(input: T): number => {
  return input.length;
};

const fruitsArray: string[] = ["apple", "banana", "cherry"];

const result = logLength(fruitsArray);

console.log(result);
