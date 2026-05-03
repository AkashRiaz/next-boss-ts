type RichPeoplesVehicle = {
  car: string;
  bike: string;
  cng: string;
};

type myVehicle1 = "bike" | "car" | "cng";

type myVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: myVehicle2 = "bike";

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user: User = {
  id: 2223,
  name: "Md Akash",
  address: {
    city: "ctg",
  },
};

// const myId = user["id"];
// const myName = user["name"];
// const address = user["address"];

// console.log({ myId, myName, address });

type Product = {
  id: number;
  brand: string;
};

const product: Product = {
  id: 124,
  brand: "HP",
};

const getPropertyFromObj = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

const result = getPropertyFromObj(user, "name");
const result2 = getPropertyFromObj(product, "brand");

console.log({ result });

console.log({result2})
