type User = {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    },
    gender: "male" | "female";
    contactNo: string;
    address: {
        division: string;
        city: string;
    }
}

const user1:User = {
    id: 1,
    name: {
        firstName: "Md",
        lastName: "Akash"
    },
    gender: "male",
    contactNo: "01700000000",
    address:{
        division: "Khulna",
        city: "Magura"
    }
}


const user2: User = {
    id: 2,
    name: {
        firstName: "Md",
        lastName: "Riaz"
    },
    gender: "male",
    contactNo: "01700000001",
    address:{
        division: "Dhaka",
        city: "Dhaka"
    }
}

// function

type AddFunction = (num1: number, num2: number) => number;

const add: AddFunction = (num1, num2) => num1 + num2;
