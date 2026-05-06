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

const result1 = add(2, 3);

// console.log(result1);

const result2 = add("2", "3");

// console.log(result2)

// in guard
type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "Admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`This ${user.name} and his role is ${user.role}`);
  }else{
    console.log(`this ${user.name } and he is normal user`)
  }
};

getUserInfo({ name: "Normal",  });
