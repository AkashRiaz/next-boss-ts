const arrayOfNum: number[] = [1, 4, 6];

// const arrayOfString: string[] = ["1", "4", "6"];

const arrayOfString: string[] = arrayOfNum.map((num) => num.toString());

console.log(arrayOfString);

type AreaOfNum = {
  height: number;
  width: number;
};

type height = AreaOfNum["height"];

// type AreaOfString = {
//   height: string;
//   width: string;
// }

type AreaOf<T> = {
  [key in keyof T]: T[key];
};

const area1: AreaOf<{ height: string; width: string }> = {
  height: "50",
  width: "40",
};
