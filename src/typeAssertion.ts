let anything: any;

anything = "Hello, World!";

anything as string;

// console.log(anything);

const kgToGMConverter = (
  input: number | string,
): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const converted = Number(input.split(" ", 1).join(""));
    // console.log(typeof converted)
    return `converted output is: ${converted * 1000}`;
  }
};

const result1 = kgToGMConverter(5) as number;
console.log(result1);
const result2 = kgToGMConverter("5 kg") as string;
console.log(result2);
