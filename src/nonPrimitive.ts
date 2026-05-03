let bazarList: string[] = ["rice", "eggs", "oil", "salt"];

// bazarList.push(true);

// console.log(bazarList);

let mixedArr: (string | number)[] = ["sugar", 2, "tea", 3, "coffee", 4];

let coordinates: [number, number] = [10, 20];
// console.log(coordinates);

let couple: [string, string] = ["Akash", "Jeba"];

// console.log(couple);

let nameAndRole: [string, number] = ["Md Akashuzzaman Riaz", 191051];
// console.log(nameAndRole);

let destination: [string, string, number] = ["Dhaka", "Chottogram", 4];

// console.log(destination);

// reference type: Object

const user: {
  readonly organization: string;
  firstName: string;
  middleName?: string;
  lastName: string;
} = {
  organization: "Programming Hero",
  firstName: "MD",
  lastName: "Riaz",
};

