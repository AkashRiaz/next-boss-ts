type GenericArray<T> = Array<T>;

// const friends: string[] = ["rahim", "karim", "sabbir"];
const friends: GenericArray<string> = ["rahim", "karim", "sabbir"];

// const rollNumbers: number[] = [3, 5, 7];

const rollNumbers: GenericArray<number> = [3, 5, 7];

// const isEligibleList: boolean[] = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];

type GenericUser = {
  name: string;
  age: number;
};

const userList: GenericArray<GenericUser> = [
  {
    name: "Mr. Z",
    age: 23,
  },
  {
    name: "Mr. Rahim",
    age: 24,
  },
];
