type User = {
  name: string;
  age: number;
};

type Role = {
  role: "admin" | "user";
};

type UserWithRole = User & Role;

interface IUser {
  name: string;
  age: number;
}

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user1: IUser = {
  name: "Md Akashuzzaman Riaz",
  age: 26,
};

const user2: User = {
  name: "Md RIaz",
  age: 22,
};

const user3: IUserWithRole = {
  name: "Md Robin",
  age: 23,
  role: "admin",
};

// function

type AddFunction = (num1: number, num2: number) => number;

interface IAddFunction {
  (num1: number, num2: number): number;
}

const add: IAddFunction = (num1, num2) => num1 + num2;

type Friends = string[];

interface IFriends {
  [index: number]: string;
}

const friends: IFriends = ["akash", "rahim", "12"];
