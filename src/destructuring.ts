// object destructuring
// array destructuring

const user = {
  id: 123,
  name: {
    firstName: {
      sirName: "Md",
      givenName: "Akash",
    },
    middleName: "Akash",
    lastName: "Riaz",
  },
  gender: "Male",
  favoriteColor: "Blue",
};

const {
  id,
  name: { firstName: { sirName, givenName }, middleName, lastName },
  gender,
  favoriteColor,
} = user;

// console.log(middleName, "middleName");
// console.log(id, "id");
// console.log(sirName, "sirName");
// console.log(givenName, "givenName");
// console.log(lastName, "lastName");
// console.log(gender, "gender");
// console.log(favoriteColor, "favoriteColor");

const friends = ["Alice", "Bob", "Charlie", "David"];

const [, mySecondBestFriend, ...otherFriends] = friends;

console.log(otherFriends, "otherFriends");
// console.log(mySecondBestFriend, "mySecondBestFriend");
