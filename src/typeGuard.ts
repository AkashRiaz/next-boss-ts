// type guard

// in typeof

type alphaNumeric = number | string;

const add = (num1: alphaNumeric, num2: alphaNumeric) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};
