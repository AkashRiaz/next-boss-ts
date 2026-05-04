type UserResponse = {
  info?: {
    address?: {
      zipCode?: string | null;
    };
  };
};

const getZipCode = (payload: UserResponse): string => {
    const zipCode = payload?.info?.address?.zipCode;

    return zipCode ?? "00000"
};

const response: UserResponse = {
  info: {
    address: {
      zipCode: "1000",
    },
  },
};


const result = getZipCode(response)

console.log(result)