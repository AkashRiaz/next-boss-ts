type User = {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    },
    gender: "male" | "female";
    contactNumber?: string;
    address: {
        division: string;
        district: string;
    }
}


const user1: User = {
  id: 123,
  name: {
    firstName: "John",
    lastName: "Doe",
  },
  gender: "male",
  contactNumber: "123-456-7890",
  address: {
    division: "Dhaka",
    district: "Dhaka"
  }
};

const user2: User = {
    id: 456,
    name: {
        firstName: "Jane",
        lastName: "Smith",
    },
    gender: "female",
    address: {
        division: "Chittagong",
        district: "Chittagong"
    }
}
